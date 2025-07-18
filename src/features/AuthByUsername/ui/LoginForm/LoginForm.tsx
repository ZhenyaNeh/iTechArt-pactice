import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUserName } from '../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface Props {
  className?: string;
}

export const LoginForm: FC<Props> = memo((props) => {
  const { className = '' } = props;
  const dispatch = useAppDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames([cls['login-form'], className])}>
      <Text title="Login form" theme={TextTheme.PRIMARY} />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        type="text"
        className={cls.input}
        placeholder="name"
        onChange={onChangeUsername}
        value={username}
        autoFocus
      />
      <Input
        type="text"
        className={cls.input}
        placeholder="password"
        onChange={onChangePassword}
        value={password}
        autoFocus
      />
      <Button
        className={cls['login-btn']}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        Submit
      </Button>
    </div>
  );
});
