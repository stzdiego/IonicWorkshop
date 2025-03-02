import {Component, OnInit} from '@angular/core';
import { UserService} from "../services/user.service";
import { User } from "../models/user.model";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit{
  users: User[] = [];
  selectedUser: User | null = null;

  constructor(private  userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  deleteUser(user: User) {
    this.users = this.users.filter(u => u !== user);
  }
}
