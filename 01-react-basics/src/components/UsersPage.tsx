import React from 'react';
import axios from 'axios';
import type { ReqResUserListResponse, User } from '@/interfaces/reqres.interface';

const loadUsers = async (): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users');
    return data.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching data');
  }
};

export function UsersPage() {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    // fetch('https://reqres.in/api/users?page=2')
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    loadUsers().then(setUsers);
  }, []);

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
