import fs from 'node:fs/promises';

import type { UpdateUser, UserDTO } from '../../types/users';
import { getUsers } from './get-users';
import { USERS_FILE } from '../../shared/constants';

export const updateUser = async (updatedUser: UpdateUser): Promise<UserDTO> => {
  try {
    const users = await getUsers();

    const userToUpdate = users.find((user) => user.id === updatedUser.id);

    if (!userToUpdate) {
      /**
       * Controller is checking if the user exists,
       * if no user is found, the controller should
       * be fixed, hence, the following error
       */
      throw new Error('User not found');
    }

    userToUpdate.email = updatedUser.email ?? userToUpdate.email;
    userToUpdate.name = updatedUser.name ?? userToUpdate.name;

    await fs.writeFile(USERS_FILE, JSON.stringify(users));

    return userToUpdate;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on updating user: ${err}`);
  }
};
