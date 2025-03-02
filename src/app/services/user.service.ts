import { Injectable } from '@angular/core';
import { User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    new User('John Doe', 'john@email.com', 25, true),
    new User('Jane Doe', 'jane@email.com', 22, false),
    new User('Luis Mendoza', 'luis@email.com', 30, true)
  ];

  getUsers(): User[] {
    return this.users;
  }
}
