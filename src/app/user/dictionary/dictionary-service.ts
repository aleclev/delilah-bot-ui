import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DictionaryEntry } from 'src/app/models/delilah/dictionary-entry';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private httpClient: HttpClient) { }

  public deleteEntry(accessToken: string, entry: DictionaryEntry): void {

    this.httpClient.delete(environment.delilah.server.url + "/dictionary/entry", {
      headers: {
        'access_token': accessToken
      },
      params: {
        'word': entry.word.word
      }
    })
    .subscribe();
  }

  public addEntry(accessToken: string, entry: DictionaryEntry) {

    this.httpClient.post(environment.delilah.server.url + '/dictionary/entry',
    {
      word: entry.word.word,
      definition: entry.definition.definition
    },
    {
      headers: {
        'access_token': accessToken
      }
    }).subscribe();
  }
}
