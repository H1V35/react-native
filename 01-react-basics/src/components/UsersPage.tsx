import React from 'react';
import axios from 'axios';
import type { ReqResUserListResponse, User } from '@/interfaces/reqres.interface';

const loadUsers = async (page: number = 1): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users', {
      params: {
        page: page,
      },
    });
    return data.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching data');
  }
};

export function UsersPage() {
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

  return (
    <div className="flex flex-col gap-8 text-center">
      <h3 className="text-2xl">Users Page</h3>

      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div className="flex justify-center gap-2">
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

interface UserRowProps {
  user: User;
}

export const UserRow = ({ user: { avatar, first_name, last_name, email } }: UserRowProps) => {
  return (
    <tr>
      <td>
        <img src={avatar} alt="User avatar" className="w-10 rounded-full" />
      </td>
      <td>
        {first_name} {last_name}
      </td>
      <td>{email}</td>
    </tr>
  );
};
