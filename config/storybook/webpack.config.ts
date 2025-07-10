import webpack, { RuleSetRule } from "webpack";
import { BuildPaths } from "../build/types/config";
import path from "path";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push("ts", "tsx");

 
  if (config.module?.rules) {
    config.module.rules = config.module.rules.map((rule) => {
      if (!rule || typeof rule !== "object") return rule;

      const webpackRule = rule as webpack.RuleSetRule;

      if (webpackRule.test) {
        const testStr = webpackRule.test.toString();
        if (/svg/.test(testStr)) {
          return { ...webpackRule, exclude: /\.svg$/i };
        }
      }

      return webpackRule;
    });
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  config.module?.rules?.push(buildCssLoaders(true));

  return config;
};
