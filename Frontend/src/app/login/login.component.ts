import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../services/backend.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private backend: BackendService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let packet = {
      email: (<HTMLInputElement>document.getElementById("login-mail")).value,
      password: (<HTMLInputElement>document.getElementById("login-pw")).value
    }
    this.backend.login(packet).subscribe((resp: any) => {
      console.log(resp);
      this.backend.token = resp.token;
    })
  }
}
