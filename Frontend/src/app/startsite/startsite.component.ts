import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import {Article, createArticle} from "../globals/types";
import {SearchPipe} from "../services/search.pipe";

@Component({
  selector: 'app-startsite',
  templateUrl: './startsite.component.html',
  styleUrls: ['./startsite.component.css'],
})
export class StartsiteComponent implements OnInit {
  product: Array<Article>;
  productLoaded: boolean;
  searchValue: string;
  customer: any[];
  constructor(
    private router: Router,
    private articleService: ArticleService,
    public searchPipe: SearchPipe
  ) {
    this.productLoaded = false;
    this.product = [];
    this.searchValue = '';
    //Ruft Asynchron die Artikel aus der DB ab
    this.articleService.getArticle().subscribe({
      next: (articleResp: Array<Article>) => {
        console.log(articleResp);
        //Setzt das Ergebnis des Datenbank aufrufs als neue Liste -> Frontend aktualisiert sich
        // von selbst, wenn wie bisher die Artikelliste auf product ausliest
        this.product = articleResp;
        this.productLoaded = true;
      },
      error: err => {
        console.log(err);
        this.productLoaded = true;
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
