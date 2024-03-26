import React from 'react';

interface useCounterOptions {
  initialValue?: number;
}

export function useCounter({ initialValue = 0 }: useCounterOptions) {
  const [count, setCount] = React.useState<number>(initialValue);

  const toggleCount = (value: number) => {
    const newCount = count + value;
    if (newCount < 0) return;

    setCount(newCount);
  };

  return {
    count,
    toggleCount,
  };
}
