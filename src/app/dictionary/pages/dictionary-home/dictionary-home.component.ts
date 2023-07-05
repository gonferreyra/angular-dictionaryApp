import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DictionaryService } from '../../services/dictionary.service';
import { SearchResponse } from '../../interfaces/searchResponse';

@Component({
  selector: 'app-dictionary-home',
  templateUrl: './dictionary-home.component.html',
  styles: [],
})
export class DictionaryHomeComponent {
  public searchWord: SearchResponse[] = [];
  public searchValue = new FormControl('');

  constructor(private dictionaryService: DictionaryService) {}

  getSearchValue(): void {
    // console.log(this.searchValue.value);
    if (this.searchWord.length < 1) return; // agregar error, ver observables
    if (this.searchWord.length >= 1) this.searchWord = [];

    this.dictionaryService
      .searchByWord(this.searchValue.value)
      .subscribe((word) => {
        this.searchWord.push(word[0]);
        console.log(this.searchWord);
      });

    // reset form
  }
}
