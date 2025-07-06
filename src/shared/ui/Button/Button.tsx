import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

export const enum ThemeButton {
  CLEAR = "clear",
  DARK = "dark",
  LIGHT = "light",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
  const {
    onClick,
    className = "",
    children,
    theme = ThemeButton.CLEAR,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      title="button"
      onClick={onClick}
      className={classNames([cls.button, cls.clear, className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
