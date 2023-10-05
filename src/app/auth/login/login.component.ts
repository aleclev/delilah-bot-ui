import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DiscordToken } from 'src/app/models/discord/discord-token';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router, private httpClient: HttpClient) {
    
  }

  ngOnInit() {
    this.login();
  }

  loginAsync() {
    
  }

  async login() {
    let params = await firstValueFrom(this.route.queryParams);

    let response = new URLSearchParams(params);
    let code = response.get('code') || "";
    let headers = new HttpParams();
    headers.append('code', code);

    let token = await firstValueFrom(this.httpClient.get<DiscordToken>(environment.delilah.server.url + '/auth/discordToken?code='+code));

    this.authService.saveToken(token.access_token.valueOf(), token.expires_in.valueOf());

    this.router.navigate(['home']).then(() => 
    window.location.reload());
  }
}
