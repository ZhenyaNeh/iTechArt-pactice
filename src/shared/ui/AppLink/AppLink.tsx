import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router";

export enum AppLinkTheme {
  PRIMARY = "theme-primary",
  SECONDARY = "theme-secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    to,
    className = "",
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames([cls["link-text-style"], cls[theme], className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
