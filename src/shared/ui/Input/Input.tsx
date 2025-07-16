import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface Props extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: FC<Props> = memo((props) => {
  const {
    className = '',
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  return (
    <div className={classNames([cls['input-wrapper'], className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={cls['caret-wrapper']}>
        <input
          ref={ref}
          name="input-string"
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls['input-con']}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          autoFocus={autoFocus}
          {...otherProps}
        />
        {isFocused && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 12}px` }}
          />
        )}
      </div>
    </div>
  );
});
