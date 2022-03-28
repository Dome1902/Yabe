import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {BackendService} from "../services/backend.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {LoginComponent} from "../login/login.component";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public backend: BackendService, private loginService: LoginService) {}

  logout(): void {
    this.backend.token = "";
  }

  openLoginModal(): void {
    this.loginService.openLoginModal();
  }

  ngOnInit(): void {
  }

}
