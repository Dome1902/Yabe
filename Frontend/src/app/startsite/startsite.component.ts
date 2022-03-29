import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import {Article} from "../globals/types";
import {SearchPipe} from "../services/search.pipe";

@Component({
  selector: 'app-startsite',
  templateUrl: './startsite.component.html',
  styleUrls: ['./startsite.component.css'],
})
export class StartsiteComponent implements OnInit {
  product: Array<Article>;
  searchValue: string;
  customer: any[];
  constructor(
    private router: Router,
    private articleService: ArticleService,
    public searchPipe: SearchPipe
  ) {
    /*this.product = [
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
    ];*/
    this.product = [];
    this.searchValue = '';
    //Ruft Asynchron die Artikel aus der DB ab
    this.articleService.getArticle().subscribe({
      next: (articleResp: Array<Article>) => {
        //Setzt das Ergebnis des Datenbank aufrufs als neue Liste -> Frontend aktualisiert sich
        // von selbst, wenn wie bisher die Artikelliste auf product ausliest
        this.product = articleResp;
      }
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

  ngOnInit(): void {}
}
