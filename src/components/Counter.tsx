import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      //проблемма с ипортом btn
      <button className={classes.btn} onClick={increment}>
        inc
      </button>
    </div>
  );
};
