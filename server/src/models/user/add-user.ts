import fs from 'node:fs/promises';

import type { UserDTO } from '../../types/user';
import { getUsers } from './get-users';
import { USERS_FILE } from '../../shared/constants';

export const addUser = async (user: UserDTO): Promise<UserDTO> => {
  try {
    const users = await getUsers();

    users.push(user);

    await fs.writeFile(USERS_FILE, JSON.stringify(users));

    return user;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on adding user: ${err}`);
  }
};
