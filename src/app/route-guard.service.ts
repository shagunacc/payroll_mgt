import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private loginservice:LoginService,private router:Router) { }
  
  canActivate(){
    if (this.loginservice.userlogin()) {
      return true;
    }
    else{
    this.router.navigate(['login']);
    return false;}

  }

}
