import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { BackendService } from '../services/backend.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  registerForm!: FormGroup;

  isLogin: boolean = true;

  constructor(private fb: FormBuilder, private backend: BackendService, public loginService: LoginService) {}

  submitLogin(): void {
    if (this.loginForm.valid) {
      let packet = {
        email: this.loginForm.value.loginEmail,
        password: this.loginForm.value.loginPassword
      }
      this.backend.login(packet).subscribe({
        next: (resp: any) => {
          this.backend.token = resp.token;
        },
        error: err =>  {
          console.log(err)
        }
      });
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  submitRegistration(): void {
    if (this.registerForm.valid) {
      let packet = {
        username: this.registerForm.value.registerUsername,
        email: this.registerForm.value.registerEmail,
        password: this.registerForm.value.registerPassword
      }
      this.backend.register(packet).subscribe({
        next: (resp: any) => {
          this.backend.token = resp.token;
        },
        error: err =>  {
          console.log(err)
        }
      });
    } else {
      Object.values(this.registerForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  toggleIsLogin(): void {
    this.isLogin = !this.isLogin;
  }

  handleCancel(): void {
    this.loginService.closeLoginModal();
  }

  ngOnInit(): void {
    this.isLogin = true;
    this.loginForm = this.fb.group({
      loginEmail: [null, [Validators.required]],
      loginPassword: [null, [Validators.required]]
    });
    this.registerForm = this.fb.group({
      registerUsername: [null, [Validators.required]],
      registerEmail: [null, [Validators.required]],
      registerPassword: [null, [Validators.required]]
    });
  }
}
