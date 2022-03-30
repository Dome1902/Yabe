import { Pipe, PipeTransform } from '@angular/core';
import {Article} from "../globals/types";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<Article>, searchValue: string): Array<Article> {
    if (!value.length) {
      return [];
    }
    if (searchValue) {
      return value.filter(article => article.name.toLocaleLowerCase().includes(<string>searchValue.toLocaleLowerCase()));
    }
    return value;
  }
}
