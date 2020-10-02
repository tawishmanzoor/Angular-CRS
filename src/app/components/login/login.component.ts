import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginServiceService,private rout:Router) { }

  ngOnInit(): void {
  }

  submit(email,password){
    this.service.Login({email,password}).subscribe(x => {
      alert('Login Successfull');
      this.rout.navigate(['home'])
    },err => alert(err.error.errorMsg));
  }

}
