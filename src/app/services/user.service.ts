import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, pluck } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserList(pageNumber: number): Observable<User> {
    return this.http.get<any>(`${environment.baseUrl}?page=${pageNumber}`).pipe(
      pluck('data'),
      shareReplay()
    );
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<any>(`${environment.baseUrl}/${userId}`).pipe(
      pluck('data'),
      shareReplay()
    );
  }
}
