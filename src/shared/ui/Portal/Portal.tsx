import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  element?: HTMLElement;
}

export const Portal: FC<PropsWithChildren<Props>> = (props) => {
  const { children, element = document.body } = props;
  return createPortal(children, element);
};
