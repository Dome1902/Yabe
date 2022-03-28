import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginVisible: boolean | undefined;

  constructor() { }

  closeLoginModal(): void {
    this.loginVisible = false;
  }

  openLoginModal(): void {
    this.loginVisible = true;
  }
}
