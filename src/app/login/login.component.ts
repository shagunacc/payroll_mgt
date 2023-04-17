import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username: string="";
  password: string="";
  validCredentials: boolean = true;
  constructor(private loginService: LoginService,private router:Router ){

  }
  ngOnInit(): void {
    console.log("entered into login");
    
    // throw new Error('Method not implemented.');
  }
  handleLogin(){
    this.loginService.validateUser(this.username, this.password).subscribe(
      response => {this.validCredentials = response;
      if (this.validCredentials){
        sessionStorage.setItem('loginuser',this.username);
       this.router.navigate(['home']);
      }
      else{
        window.alert("invalid credentials");
      }
      }
    )
  }


  
}
