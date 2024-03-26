export function BasicFunctions() {
  const addTwoNumber = (a: number, b: number): string => {
    return (a + b).toString();
  };

  return (
    <div>
      <h3 className="text-2xl">Basic Functions</h3>
      <br />
      <p>Sum result is: {addTwoNumber(2, 8)}</p>
    </div>
  );
}
