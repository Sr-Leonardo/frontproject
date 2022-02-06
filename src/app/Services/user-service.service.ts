import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/users/'

  getUsers(){
    return this.http.get<User[]>(this.Url+"getUsers");
  }
}
