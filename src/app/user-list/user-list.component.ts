import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: any;
  page = 1;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getUserList(this.page);
  }

  back() {
    if (this.page > 1) {
      this.page--;
      this.users$ = this.userService.getUserList(this.page);
    }
  }

  next() {
    this.page++;
    this.users$ = this.userService.getUserList(this.page);
  }

}
