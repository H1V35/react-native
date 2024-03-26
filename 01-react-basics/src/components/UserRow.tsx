import type { User } from '@/interfaces/reqres.interface';

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
