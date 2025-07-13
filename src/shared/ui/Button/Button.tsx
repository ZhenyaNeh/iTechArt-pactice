import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import 'app/style/index.scss';

export const enum ThemeButton {
  CLEAR = 'clear',
  DARK = 'dark',
  LIGHT = 'light',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    onClick,
    className = '',
    children,
    theme = ThemeButton.CLEAR,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      title="button"
      onClick={onClick}
      className={classNames([cls.button, className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
