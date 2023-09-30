import { Component, Input } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { DictionaryEntry } from 'src/app/models/delilah/dictionary-entry';
import { DictionaryService } from './dictionary-service';
import { Dictionary } from 'src/app/models/delilah/dictionary';
import { DelilahUserService } from '../delilah-user.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent {

  private dictionary!: Dictionary;

  public filteredEntries!: Array<DictionaryEntry>;

  constructor(private dictionaryService: DictionaryService, private delilahUserService: DelilahUserService) {}

  ngOnInit() {
    this.delilahUserService.getCurrentDelilahUserInfo()
    .subscribe(r => {
        this.dictionary = r.rootDictionary;
        this.filteredEntries = this.dictionary.entries;
      });
  }

  public getDictionaryEntries(): Array<DictionaryEntry> {
    return this.dictionary.entries;
  }

  public updateFilteredEntries(searchQuery: string) {

    this.filteredEntries = this.dictionary.entries.filter((e) => e.word.word.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  public deleteEntry(entry: DictionaryEntry): void {

    this.dictionaryService.deleteEntry(Cookie.get('access_token'), entry);
    let idx = this.filteredEntries.indexOf(entry);
    this.filteredEntries.splice(idx, 1);
  }

  public addEntry(word: string, definition: string) {
    let entry: DictionaryEntry = {
      word: {
        word: word
      },
      definition: {
        definition: definition
      }
    }

    this.dictionaryService.addEntry(Cookie.get('access_token'), entry)

    this.filteredEntries.unshift(entry);
  }

}
