import { useUsers } from '@/hooks/useUsers';
import { UserRow } from '@/components/UserRow';

export function UsersPage() {
  const { users, prevPage, nextPage } = useUsers();

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
