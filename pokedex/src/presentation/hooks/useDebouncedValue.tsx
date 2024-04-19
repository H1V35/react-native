import React from 'react';

export function useDebouncedValue(input: string = '', time: number = 500) {
  const [debouncedValue, setDebouncedValue] = React.useState(input);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return debouncedValue;
}
