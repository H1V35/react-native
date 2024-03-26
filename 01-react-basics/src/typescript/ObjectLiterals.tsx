interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  country: string;
  houseNo: number;
}

export function ObjectLiterals() {
  const person: Person = {
    firstName: 'Fernando',
    lastName: 'Alonso',
    age: 42,
    address: {
      country: 'Spain',
      houseNo: 33,
    },
  };

  return (
    <div>
      <h3 className="text-2xl">Object Literals</h3>
      <br />
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </div>
  );
}
