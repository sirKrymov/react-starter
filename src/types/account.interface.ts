import { UserRoles } from 'constants/permissions';

export interface IAccount {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRoles | null;
}
