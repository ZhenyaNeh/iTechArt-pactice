import { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface Props {
  className?: string;
}

export const Counter: FC<Props> = (props) => {
  const { className = '' } = props;
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  }
  
  const decrement = () => {
    dispatch(counterActions.decrement());
  }

  return (
    <div>
      <h1>value: {counterValue}</h1>
      <Button onClick={increment}>inc</Button>
      <Button onClick={decrement}>dec</Button>
    </div>
  );
};