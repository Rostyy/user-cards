import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserList(pageNumber: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}?page=${pageNumber}`).pipe(
      shareReplay()
    );
  }

  getUserById(userId: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/${userId}`).pipe(
      shareReplay()
    );
  }
}
