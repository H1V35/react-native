import React from 'react';
import { useAuthStore } from '@/store/auth.store';

export function LoginPage() {
  const authStatus = useAuthStore((state) => state.status);
  const user = useAuthStore((state) => state.user);

  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  React.useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  }, [logout]);

  if (authStatus === 'checking') return <h3>Loading...</h3>;

  return (
    <div className="flex flex-col gap-8 text-center">
      <h3 className="text-2xl">Login Page</h3>

      {authStatus === 'authenticated' ? (
        <div className="flex flex-col gap-4">
          <h4>Authenticated as:</h4>

          <pre className="text-start">{JSON.stringify(user, null, 2)}</pre>

          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h4>Not authenticated</h4>

          <button onClick={() => login('fernando@alonso.es', '1233')}>Login</button>
        </div>
      )}
    </div>
  );
}
