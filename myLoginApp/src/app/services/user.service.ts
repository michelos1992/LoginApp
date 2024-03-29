import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<User[]>('api/users');
  }

  getById(id: number) {
      return this.http.get('api/users/' + id);
  }

  register(user: User) {
      return this.http.post('api/users/register', user);
  }

  update(user: User) {
      return this.http.put('api/users/' + user.id, user);
  }

  delete(id: number) {
      return this.http.delete('api/users/' + id);
  }
}
