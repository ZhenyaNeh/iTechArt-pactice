import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface Props {
  className?: string;
}

export const LoginForm: FC<Props> = (props) => {
  const { className = '' } = props;
  return (
    <div className={classNames([cls['login-form'], className])}>
      <Input type="text" className={cls.input} placeholder="name" autoFocus />
      <Input
        type="text"
        className={cls.input}
        placeholder="password"
        autoFocus
      />
      <Button className={cls['login-btn']}>Submit</Button>
    </div>
  );
};
