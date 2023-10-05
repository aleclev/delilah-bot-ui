import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DictionaryEntry } from 'src/app/models/delilah/dictionary-entry';
import { DictionaryService } from '../dictionary-service';
import { AuthService } from 'src/app/auth/auth.service';
import { Dictionary } from 'src/app/models/delilah/dictionary';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.scss']
})
export class CreateEntryComponent {
  
  @Input()
  public dictionary!: Dictionary;

  @ViewChild('newWord')
  private newWord!: ElementRef;

  @ViewChild('newDefinition')
  private newDefinition!: ElementRef;

  constructor(private dictionaryService: DictionaryService, 
    private authService: AuthService,
    private matSnackBar: MatSnackBar) {}
  
  public addEntry(word: string, definition: string) {
    let entry: DictionaryEntry = {
      word: {
        word: word
      },
      definition: {
        definition: definition
      }
    };

    this.dictionaryService.addEntryObservable(this.authService.getAccessToken(), entry).subscribe();

    this.dictionary.entries.unshift(entry);

    this.newWord.nativeElement.value = '';
    this.newDefinition.nativeElement.value = '';

    this.matSnackBar.open("Entry created!", undefined, {duration: 3000});
  }

  public showAddEntryButton(word: string, definition: string): boolean {
    return word.length > 0 && definition.length > 0 && !this.dictionaryService.wordExists(word, this.dictionary);
  }
}
