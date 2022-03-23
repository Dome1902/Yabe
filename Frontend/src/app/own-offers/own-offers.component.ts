import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-own-offers',
  templateUrl: './own-offers.component.html',
  styleUrls: ['./own-offers.component.css']
})
export class OwnOffersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
