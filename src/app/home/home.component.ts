import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router, RouterLink } from '@angular/router';

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

    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=974717104223825920&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin&response_type=code&scope=identify";
  }
}
