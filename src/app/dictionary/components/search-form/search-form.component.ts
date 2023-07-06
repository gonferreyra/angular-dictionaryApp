import { Component, Input } from '@angular/core';
import { DictionaryService } from '../../services/dictionary.service';
import { FormControl } from '@angular/forms';
import { SearchResponse } from '../../interfaces/searchResponse';

@Component({
  selector: 'dictionary-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent {
  @Input() public searchWord: SearchResponse[] = [];
  public searchValue = new FormControl('');

  constructor(private dictionaryService: DictionaryService) {}

  sendToServiceSearchWord() {
    this.dictionaryService.getSearchValue(this.searchValue.value);
    this.searchValue.reset();
  }
}
