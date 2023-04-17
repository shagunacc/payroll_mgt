import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl="http://localhost:8080/api/a1/login";

  constructor(private httpClient:HttpClient) { }

  validateUser(username: String, password: String){
    return this.httpClient.get<boolean>(`${this.baseUrl}/${username}/${password}`);
  }
  userlogin(){
    let user=sessionStorage.getItem('loginuser');
    return !(user==null);
  }
}
