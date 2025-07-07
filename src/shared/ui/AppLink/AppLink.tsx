import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router';
import { FC, PropsWithChildren } from 'react';

export enum AppLinkTheme {
  PRIMARY = 'theme-primary',
  SECONDARY = 'theme-secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
  const {
    to,
    className = '',
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames([cls['link-text-style'], cls[theme], className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
