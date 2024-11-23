import type { UserDTO } from '../../shared/types/user';
import { getUsers } from './get-users';

export const getUser = async (id: string): Promise<UserDTO | undefined> => {
  try {
    const users: UserDTO[] = await getUsers();

    const user = users.find((user) => user.id === id);

    return user;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting user: ${err}`);
  }
};
