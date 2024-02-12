import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../shared/modal/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 API_URL = `http://35.180.97.53/`

 public currentUserSubject : BehaviorSubject <User>
 public currentUser : Observable<User>

  constructor(private http : HttpClient) { 
    let user = null
    if (localStorage.getItem('currentUser')){
      user = JSON.parse(localStorage.getItem('currentUser'));      
    }

    this.currentUserSubject = new BehaviorSubject<User>(user!);

    this.currentUser = this.currentUserSubject.asObservable();
  
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value
  }

  login(data){
    const form_data = new FormData();
    form_data.append('email', data.email);
    form_data.append('password', data.password);
    form_data.append('language', 'en');

    this.http.post(`${this.API_URL}influencer/login/`, data).subscribe((res: any)=>{
      console.log(res);
      
    })

  }
}
