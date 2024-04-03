import React from 'react';

export function useCalculator() {
  const [number, setNumber] = React.useState('0');

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Decimal dot
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      // Evaluate if it is another 0 and there is no point
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      // Evaluate if it is different from 0, there is no point, and it is the first number
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      // Avoid 0000.00
      if (numberString === '0' && !number.includes('.')) {
        return;
      }

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  return {
    number,
    buildNumber,
  };
}
