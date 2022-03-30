import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Bid, makeBid} from "../globals/types";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BidService {

  constructor(private http: HttpClient) { }

  getArticleBids(id: string): Observable<Bid> {
    return this.http.get<Bid>(environment.backendUrl + '/bids/article/' + id);
  }

  makeBid(bid: makeBid) {
    return this.http.post(environment.backendUrl + '/bids', bid);
  }

}
