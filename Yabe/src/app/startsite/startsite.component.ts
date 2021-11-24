import { Component, Input, OnInit } from '@angular/core';
import { product } from '../model/product-entry';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-startsite',
  templateUrl: './startsite.component.html',
  styleUrls: ['./startsite.component.css'],
})
export class StartsiteComponent implements OnInit {
  product: any[];
  constructor() {
    this.product = [
      {
        title: 'hello',
        description: 'hello',
        picture:
          'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg',
      },
      {
        title: 'tag',
        description: 'tag',
        picture:
          'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg',
      },
      {
        title: 'Moderne Couch',
        description: 'Super',
        picture:
          'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg',
      },

    ];
  }

  ngOnInit(): void {}
}
