import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface Props {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<Props> = (props) => {
  const {
    className = '',
    title = '',
    text = '',
    theme = TextTheme.PRIMARY,
  } = props;
  return (
    <div className={classNames([className], { [cls[theme]]: true })}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
