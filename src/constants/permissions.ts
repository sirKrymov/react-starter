import { IPagesPermissions } from 'types/permissions.interface';

export enum UserRoles {
  SUPERADMINISTRATOR = 'SUPERADMINISTRATOR',
  ADMINISTRATOR = 'ADMINISTRATOR',
  OPERATOR = 'OPERATOR'
}

export const pagePermissions: IPagesPermissions = {
  weather: [UserRoles.SUPERADMINISTRATOR, UserRoles.ADMINISTRATOR]
};
