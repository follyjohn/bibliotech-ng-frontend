import { User } from './User.model';
import { Permission } from './Permission.model';
export class Role {
  // tslint:disable-next-line: variable-name
  _id: string;
  name: string;
  createdBy: User;
  premissions: [Permission];
}
