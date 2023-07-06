import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { SearchResponse } from '../interfaces/searchResponse';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private apiUrl: string = 'https://api.dictionaryapi.dev/api/v2/entries/en';

  public apiResponse: SearchResponse[] = [];

  constructor(private httpClient: HttpClient) {}

  searchByWord(term: string | null): Observable<SearchResponse[]> {
    const url = `${this.apiUrl}/${term}`;

    return this.httpClient.get<SearchResponse[]>(url).pipe(
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  getSearchValue(value: string | null): void {
    if (value === '') return;
    // agregar mensage de error
    if (this.apiResponse.length >= 1) this.apiResponse = [];
    this.searchByWord(value).subscribe((word) => {
      this.apiResponse.push(word[0]);
      // console.log(this.apiResponse);
    });
  }
}
