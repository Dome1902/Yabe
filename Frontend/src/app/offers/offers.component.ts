import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Article, makeBid} from "../globals/types";
import {ArticleService} from "../services/article.service";
import {BidService} from "../services/bid.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  article: Article;

  bids: Array<makeBid>;

  newBid: number;

  maxBid: number;

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private bidService: BidService, private msg: NzMessageService) {
    this.article = <Article>{};
    this.bids = new Array<makeBid>();
    this.newBid = 0;
    this.maxBid = 0;
  }

  resetVariables(): void {
    this.article = <Article>{};
    this.bids = new Array<makeBid>();
    this.newBid = 0;
    this.maxBid = 0;
  }

  makeBid(): void {
    if (this.newBid <= this.maxBid) {
      this.msg.error('Ein neues Gebot muss höher als das aktuell höchste sein.');
      return;
    }
    const bid = {
      article: this.article._id,
      price: this.newBid
    }
    this.bidService.makeBid(bid).subscribe({
      next: (resp: any) => {
        console.log(resp);
        if (!resp.error) {
          this.msg.success(resp.message);
        } else {
          this.msg.error(resp.message);
        }
        this.getBids(this.article._id)
      }
    })
  }

  getArticle(articleId: string): void {
    this.articleService.getArticleById(articleId).subscribe({
      next: (resp: Article) => {
        this.article = resp;
      }
    });
  }

  getBids(articleId: string): void {
    this.bidService.getArticleBids(articleId).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.bids = resp;
        if (!resp.length) {
          this.newBid = 1;
        } else {
          this.maxBid = Math.max.apply(Math, this.bids.map(bid => {return bid.price}));
          this.newBid = this.maxBid + 1;
        }
      }
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: params => {
        this.resetVariables();
        const articleId = params.get('articleId');
        if (articleId) {
          this.getArticle(articleId);
          this.getBids(articleId);
        }
      }
    });
  }

}
