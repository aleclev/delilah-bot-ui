import { Component, Input } from '@angular/core';
import { DelilahUser } from 'src/app/models/delilah/delilah-user';
import { Dictionary } from 'src/app/models/delilah/dictionary';
import { DictionaryEntry } from 'src/app/models/delilah/dictionary-entry';
import { DelilahUserService } from '../../delilahUser/delilah-user.service';
import { DictionaryService } from '../dictionary-service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-search-entry',
  templateUrl: './search-entry.component.html',
  styleUrls: ['./search-entry.component.scss']
})
export class SearchEntryComponent {

  @Input()
  public dictionary!: Dictionary;

  constructor(private delilahUserService: DelilahUserService,
    private dictionaryService: DictionaryService,
    private authService: AuthService) {}

  ngOnInit() {
    let user: DelilahUser = this.delilahUserService.getDelilahUser();
    this.dictionary = user.rootDictionary;
  }

  public getFilteredEntries(searchQuery: string) {

    return this.dictionary.entries.filter((e) => e.word.word.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  public deleteEntry(entry: DictionaryEntry): void {

    this.dictionaryService.deleteEntryObservable(this.authService.getAccessToken(), entry)
    .subscribe();

    let idx = this.dictionary.entries.indexOf(entry);
    this.dictionary.entries.splice(idx, 1);
  }
}
