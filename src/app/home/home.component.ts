import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  providers: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
  }

  public login() {

    window.location.href = environment.delilah.discord.oauth2Url;
  }
}
