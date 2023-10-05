import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dictionary } from 'src/app/models/delilah/dictionary';
import { DictionaryEntry } from 'src/app/models/delilah/dictionary-entry';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private httpClient: HttpClient) { }

  public deleteEntryObservable(accessToken: string, entry: DictionaryEntry): Observable<any> {

    return this.httpClient.delete(environment.delilah.server.url + "/dictionary/entry", {
      headers: {
        'access_token': accessToken
      },
      params: {
        'word': entry.word.word
      }
    });
  }

  public addEntryObservable(accessToken: string, entry: DictionaryEntry): Observable<any> {

    return this.httpClient.post(environment.delilah.server.url + '/dictionary/entry',
    {
      word: entry.word.word,
      definition: entry.definition.definition
    },
    {
      headers: {
        'access_token': accessToken
      }
    });
  }

  public wordExists(word: string, dictionary: Dictionary): boolean {

    if (dictionary.entries.find(d => d.word.word == word)) return true;

    return false;
  }
}
