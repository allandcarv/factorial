export interface UserDTO {
  id: string;
  name: string;
  email: string;
}

export type NewUser = Omit<UserDTO, 'id'>;

export interface UpdateUser extends Partial<NewUser> {
  id: string;
}
