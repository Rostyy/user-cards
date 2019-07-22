import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../services/user.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetails$: any;

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userDetails$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userService.getUserById(params.get('userId'))
      )
    );
  }

}
