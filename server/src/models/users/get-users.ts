import fs from 'node:fs/promises';

import type { UserDTO } from '../../types/users';
import { USERS_FILE } from '../../shared/constants';

export const getUsers = async (): Promise<UserDTO[]> => {
  try {
    const usersBuffer = await fs.readFile(USERS_FILE);

    const users: UserDTO[] = JSON.parse(usersBuffer.toString());

    return users;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting users: ${err}`);
  }
};
