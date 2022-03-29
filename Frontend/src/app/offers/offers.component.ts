import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Article} from "../globals/types";
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  article: Article | undefined;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: params => {
        const articleId = params.get('articleId');
        if (articleId) {
          this.articleService.getArticleById(articleId).subscribe({
            next: (resp: Article) => {
              this.article = resp;
              console.log(this.article);
            }
          });
        }
      }
    });
  }

}
