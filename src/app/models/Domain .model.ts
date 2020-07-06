import { User } from './User.model';

export class Domain {
  // tslint:disable-next-line: variable-name
  _id: string;
  name: string;
  description: string;
  createdBy: User;
}
