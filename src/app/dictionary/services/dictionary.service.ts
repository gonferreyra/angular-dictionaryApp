import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { SearchResponse } from '../interfaces/searchResponse';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private apiUrl: string = 'https://api.dictionaryapi.dev/api/v2/entries/en';

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
}
