export function BasicTypes() {
  // Type inference
  const name = 'John';
  const age = 33;
  const isActive = true;
  const powers = ['TypeScript', 'React', 'ReactNative'];

  powers.push('Next');

  return (
    <div>
      <h3 className="text-2xl">Basic Types</h3>
      <br />
      {name} {age} {`Status: ${isActive ? 'Active' : 'Inactive'}`}
      <br />
      {`Powers: ${powers.join(', ')}`}
    </div>
  );
}
