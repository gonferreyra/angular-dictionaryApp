import { Component, Input } from '@angular/core';
import { SearchResponse } from '../../interfaces/searchResponse';

@Component({
  selector: 'dictionary-search-response',
  templateUrl: './search-response.component.html',
  styleUrls: ['./search-response.component.css'],
})
export class SearchResponseComponent {
  @Input()
  public searchWord: SearchResponse[] = [];
}
