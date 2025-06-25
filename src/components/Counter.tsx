import { useState } from "react";
import "./Counter.scss"

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>inc</button>
    </div>
  );
};
