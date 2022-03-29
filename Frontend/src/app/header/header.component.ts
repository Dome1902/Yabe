import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ArticleService} from "../services/article.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {LoginComponent} from "../login/login.component";
import {LoginService} from "../services/login.service";
import {SearchPipe} from "../services/search.pipe";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: LoginService, public searchPipe: SearchPipe) {}

  logout(): void {
    this.loginService.token = "";
  }

  openLoginModal(): void {
    this.loginService.openLoginModal();
  }

  ngOnInit(): void {
  }

}
