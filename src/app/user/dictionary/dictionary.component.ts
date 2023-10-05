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

  dictionary!: Dictionary;

  constructor(private dictionaryService: DictionaryService, private delilahUserService: DelilahUserService) {}

  ngOnInit() {
    let user: DelilahUser = this.delilahUserService.getDelilahUser();
    this.dictionary = user.rootDictionary;
  }
}
