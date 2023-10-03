import { Component, Input } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { DictionaryEntry } from 'src/app/models/delilah/dictionary-entry';
import { DictionaryService } from './dictionary-service';
import { Dictionary } from 'src/app/models/delilah/dictionary';
import { DelilahUserService } from '../delilahUser/delilah-user.service';
import { DelilahUser } from 'src/app/models/delilah/delilah-user';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent {

  private dictionary!: Dictionary;

  public filteredEntries!: Array<DictionaryEntry>;

  constructor(private dictionaryService: DictionaryService, private delilahUserService: DelilahUserService) {}

  ngOnInit() {
    let user: DelilahUser = this.delilahUserService.getDelilahUser();
    this.dictionary = user.rootDictionary;
    this.filteredEntries = this.dictionary.entries;
  }

  public showAddEntryButton(word: string, definition: string): boolean {
    return word.length > 0 && definition.length > 0;
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
