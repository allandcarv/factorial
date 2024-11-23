import fs from 'node:fs/promises';

import { getUsers } from './get-users';
import { USERS_FILE } from '../../shared/constants';

export const deleteUser = async (userId: string): Promise<void> => {
  try {
    const users = await getUsers();

    const newUsers = users.filter((user) => user.id !== userId);

    await fs.writeFile(USERS_FILE, JSON.stringify(newUsers));
  } catch (err) {
    console.error(err);

    throw new Error(`Error on removing user: ${err}`);
  }
};
