import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private hostname = 'localhost';
  private userUrl = 'http://' + this.hostname + ':8181/user-api';

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    const url = `${this.userUrl}/user/${id}`;
    return this.http.get<User>(url);
  }
}
