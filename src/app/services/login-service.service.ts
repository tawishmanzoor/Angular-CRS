import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  Login(data): Observable<any>{
    return this.http.post("https://blooming-atoll-97481.herokuapp.com/authenticate",data);
  }

  register(email,password,userName){
    return this.http.post("https://blooming-atoll-97481.herokuapp.com/register",{email,password,userName});
  }
}
