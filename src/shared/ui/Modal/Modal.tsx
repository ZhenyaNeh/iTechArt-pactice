import { FC, MouseEvent, PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface Props {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: FC<PropsWithChildren<Props>> = (props) => {
  const { className = '', children, isOpen = false, onClose } = props;

  const closeHandle = () => {
    if (onClose) onClose();
  };

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };

  return (
    <div className={classNames([cls.modal, className], mods)}>
      <div className={cls.overlay} onClick={closeHandle}>
        <div className={cls.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  );
};
