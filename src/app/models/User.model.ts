import { Role } from './Role.model';
import { Permission } from './Permission.model';

export class User{
  // tslint:disable-next-line: variable-name
  _id: string;
  userName: string;
  email: string;
  password: string;
  pp: string;
  role: [Role];
  extraPermissions: [Permission];
}
