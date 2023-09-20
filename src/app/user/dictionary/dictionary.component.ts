import { Component } from '@angular/core';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent {

  private dictionary: any;

  constructor() {
    
  }

  ngOnInit() {
    
    console.log(this.dictionary);
  }

}
