import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {createArticle, Article} from "../globals/types";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
