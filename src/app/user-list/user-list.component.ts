import { Component, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users$: Observable<User[]>;
  page = 1;
  lastPage: number;
  usersSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getUserList(this.page);
    this.usersSubscription = this.users$.subscribe((users: User[]) => this.lastPage = this.userService.totalPages);
  }

  back(): void {
    if (this.page > 1) {
      this.page--;
      this.users$ = this.userService.getUserList(this.page);
    }
  }

  next(): void {
    this.page++;
    this.users$ = this.userService.getUserList(this.page);
  }

  ngOnDestroy() {
    if (this.usersSubscription) {
      this.usersSubscription.unsubscribe();
    }
  }

}
