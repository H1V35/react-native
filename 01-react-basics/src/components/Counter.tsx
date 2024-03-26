import React from 'react';

export function Counter() {
  const [count, setCount] = React.useState<number>(10);

  const toggleCount = (value: number) => {
    setCount(count + value);
  };

  return (
    <div className="mt-10">
      <h3 className="text-2xl">
        Counter: <small>{count}</small>
      </h3>
      <br />
      <div className="flex gap-1">
        <button onClick={() => toggleCount(1)}>+1</button>
        <button onClick={() => toggleCount(-1)}>-1</button>
      </div>
    </div>
  );
}
