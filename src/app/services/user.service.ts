import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { shareReplay, pluck, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // cached usersList
  userList = [];

  constructor(private http: HttpClient) { }

  /**
   * get users list
   * @param {number} pageNumber
   * @returns {Observable<User>}
   */
  getUserList(pageNumber: number): Observable<User> {
    return this.userList[pageNumber - 1] ? of(this.userList[pageNumber - 1]) :
    this.http.get<User>(`${environment.baseUrl}?page=${pageNumber}`).pipe(
      pluck('data'),
      tap((users: any) => this.userList.push(users)),
      shareReplay<User>()
    );
  }

  /**
   * get user by id
   * @param {string} userId
   * @returns {Observable<User>}
   */
  getUserById(userId: string): Observable<User> {
    return this.http.get<any>(`${environment.baseUrl}/${userId}`).pipe(
      pluck('data'),
      shareReplay()
    );
  }
}
