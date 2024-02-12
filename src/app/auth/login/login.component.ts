import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm! : FormGroup;
  
  constructor(
    private fb : FormBuilder,
    private auth: AuthService
    ){}

  ngOnInit(): void {
  this.loginForm =  this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })
  }

  login(){
    this.markFormGroupTouched(this.loginForm);
    if( this.loginForm.invalid){
      return;
    }
    let data = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
    this.auth.login(data);
    // console.log(data);
    

  }
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control :any)=>{
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    })
  }

}
