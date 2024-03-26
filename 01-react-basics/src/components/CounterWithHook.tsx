import { useCounter } from '@/hooks/useCounter';

export function CounterWithHook() {
  const { count, toggleCount } = useCounter({ initialValue: 33 });

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
