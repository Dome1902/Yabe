import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../services/backend.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private backend: BackendService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let packet = {
      username: (<HTMLInputElement>document.getElementById("register-username")).value,
      email: (<HTMLInputElement>document.getElementById("register-mail")).value,
      password: (<HTMLInputElement>document.getElementById("register-password")).value
    }
    this.backend.register(packet).subscribe((resp:any) => {
      console.log(resp);
      this.backend.token = resp.token;
    })
  }

}
