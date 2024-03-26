import React from 'react';
import { loadUsers } from '@/services/loadUsers.service';
import type { User } from '@/interfaces/reqres.interface';

export function useUsers() {
  const [users, setUsers] = React.useState<User[]>([]);
  const currentPageRef = React.useRef(1);

  React.useEffect(() => {
    // fetch('https://reqres.in/api/users?page=2')
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    loadUsers(currentPageRef.current).then(setUsers);
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadUsers(currentPageRef.current);

    if (users.length > 0) {
      setUsers(users);
      return;
    }
    currentPageRef.current--;
  };

  const prevPage = async () => {
    if (currentPageRef.current <= 1) return;

    currentPageRef.current--;
    const users = await loadUsers(currentPageRef.current);
    setUsers(users);
  };

  return {
    users,
    prevPage,
    nextPage,
  };
}
