import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:LoginServiceService,private rout:Router) { }

  ngOnInit(): void {
  }

  submit(email,pass,username){
    this.service.register(email,pass,username).subscribe(x => {
      alert('Registration Successfull');
      this.rout.navigate(['login'])
    },err => alert(err.error.errorMsg));
  }

}
