import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ArticleService } from '../services/article.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {NzMessageService} from "ng-zorro-antd/message";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  registerForm!: FormGroup;

  isLogin: boolean = true;

  constructor(private fb: FormBuilder, public loginService: LoginService, private msg: NzMessageService) {}

  submitLogin(): void {
    if (this.loginForm.valid) {
      let packet = {
        email: this.loginForm.value.loginEmail,
        password: this.loginForm.value.loginPassword
      }
      this.loginService.login(packet).subscribe({
        next: (resp: any) => {
          this.loginService.token = resp.token;
          this.loginService.closeLoginModal();
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
      this.loginService.register(packet).subscribe({
        next: (resp: any) => {
          console.log(resp);
          if (resp.error) {
            this.msg.error(resp.message);
          } else {
            this.loginService.token = resp.token;
            this.loginService.closeLoginModal();
          }
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
