import React from 'react';

enum Operator {
  add,
  subtract,
  multiply,
  divide,
}

export function useCalculator() {
  const [number, setNumber] = React.useState('0');
  const [prevNumber, setPrevNumber] = React.useState('0');

  const lastOperation = React.useRef<Operator>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const deleteOperation = () => {
    let currentSign = '';
    let temporalNumber = number;

    if (number.includes('-')) {
      currentSign = '-';
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber('0');
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  };

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

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateResult = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastOperation.current) {
      case Operator.add:
        setNumber(`${num2 + num1}`);
        break;

      case Operator.subtract:
        setNumber(`${num2 - num1}`);
        break;

      case Operator.multiply:
        setNumber(`${num2 * num1}`);
        break;

      case Operator.divide:
        setNumber(`${num2 / num1}`);
        break;

      default:
        throw new Error('Operation not implemented');
    }

    setPrevNumber('0');
  };

  return {
    number,
    prevNumber,
    clean,
    deleteOperation,
    toggleSign,
    buildNumber,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  };
}
