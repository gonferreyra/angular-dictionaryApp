import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DictionaryService } from '../../services/dictionary.service';
import { SearchResponse } from '../../interfaces/searchResponse';

@Component({
  selector: 'app-dictionary-home',
  templateUrl: './home-page.component.html',
  styleUrls: [],
})
export class DictionaryHomeComponent {
  constructor(private dictionaryService: DictionaryService) {}

  // Traemos del servicio el array con la respuesta de la API
  get apiResponse(): SearchResponse[] {
    return this.dictionaryService.apiResponse;
  }
}
