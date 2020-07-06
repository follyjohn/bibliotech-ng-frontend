import { User } from './User.model';
export class Permission{
  // tslint:disable-next-line: variable-name
  _id: string;
  name: string;
  createdBy: User;
}
