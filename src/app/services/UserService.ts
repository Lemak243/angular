import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService {
  private users: User[]=[
    new User('will', 'Alexander', 'will@will.com','jus d orange',['code', 'boire cafe'])
  ];
  userSubject = new Subject<User[]>();

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }
}
