import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Separator.module.scss";

const enum SeparatorOrientation {
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
}

interface SeparatorProps {
  variant: "vertical" | "horizontal";
  className?: string;
}

const Separator = ({
  variant = "horizontal",
  className = "",
}: SeparatorProps) => {
  return (
    <div
      className={classNames([
        cls.separator,
        `${
          variant === SeparatorOrientation.VERTICAL
            ? cls["vertical-separator"]
            : cls["horizontal-separator"]
        }`,
        className,
      ])}
    />
  );
};

export default Separator;
