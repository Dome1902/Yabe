import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-startsite',
  templateUrl: './startsite.component.html',
  styleUrls: ['./startsite.component.css'],
})
export class StartsiteComponent implements OnInit {
  product: any[];
  customer: any[];
  constructor(
    private router: Router,
    private backend: BackendService
  ) {
    this.product = [
      {
        title: 'hello',
        price: '6,70€',
        counter: '5.00',
        picture:
          'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg',
      },
      {
        title: 'tag',
        price: '5,50€',
        counter: '15.00',
        picture:
          'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg',
      },
      {
        title: 'Moderne Couch',
        price: '5.50€',
        counter: '5.00',
        picture:
          'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg',
      },
      {
        title: 'Moderne Couch',
        price: '5.50€',
        counter: '5.00',
        picture:
          'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg',
      },
      {
        title: 'Moderne Couch',
        price:'5.50€ ',
        counter: '5.00',
        picture:
          'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg',
      },
      {
        title: 'Moderne Couch',
        price: '5.50€',
        counter: '5.00',
        picture:
          'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg',
      },
    ];

    //Ruft Asynchron die Artikel aus der DB ab
    this.backend.getArticle().subscribe(articleResp => {

      //Setzt das Ergebnis des Datenbank aufrufs als neue Liste -> Frontend aktualisiert sich
      // von selbst, wenn wie bisher die Artikelliste auf product ausliest
      this.product = <any[]>articleResp;
    })

    this.customer = [
      {
      customerPicture: 'https://i.pinimg.com/originals/8e/d6/6e/8ed66e4e1e535921c241952fccb5c4f8.jpg',
      surname:'Monkey',
      name:'In a suit',
      membership:'19.02.2000',
      }
    ]
  }
  navigateTo(value:any) {
    this.router.navigate(['../', value]);
  }

  ngOnInit(): void {}
}
