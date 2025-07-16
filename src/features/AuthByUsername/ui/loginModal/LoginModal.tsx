import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface Props {
  className?: string;
  isOpen: boolean;
  onCLose: () => void;
}

export const LoginModal: FC<Props> = (props) => {
  const { className = '', isOpen, onCLose } = props;
  return (
    <Modal
      className={classNames([className])}
      isOpen={isOpen}
      onClose={onCLose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
