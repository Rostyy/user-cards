import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

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
    this.users$.subscribe(list => console.log('list', list));
  }

}
