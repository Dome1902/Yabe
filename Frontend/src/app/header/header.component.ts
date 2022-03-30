import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {CookieService} from "ngx-cookie";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: LoginService, private cookieService: CookieService, private router: Router, private msg: NzMessageService) {}

  logout(): void {
    this.cookieService.remove('yabe-auth');
    this.router.navigate(['']);
    this.msg.info('You are now logged out. See you soon!');
    this.loginService.loggedIn = false;
  }

  openLoginModal(): void {
    this.loginService.openLoginModal();
  }

  ngOnInit(): void {
  }

}
