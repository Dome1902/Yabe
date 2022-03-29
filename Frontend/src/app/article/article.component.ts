import {Component, Input, OnInit} from '@angular/core';
import {createArticle} from "../globals/types";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: createArticle | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
