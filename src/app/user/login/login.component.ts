import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DiscordToken } from 'src/app/models/discord/discord-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private route: ActivatedRoute, private appService: AppService, private router: Router, private httpClient: HttpClient) {
    
  }

  ngOnInit() {
    this.login();
  }

  loginAsync() {
    
  }

  login() {
    this.route.queryParams
    .subscribe(params => {
      if (params) {
        let response = new URLSearchParams(params);
        let code = response.get('code') || "";
        let headers = new HttpParams();
        headers.append('code', code);

        this.httpClient.get<DiscordToken>('http://localhost:8080/auth/discordToken?code='+code)
        .subscribe(token => {
          this.appService.saveToken(token.access_token.valueOf(), token.expires_in.valueOf());
          this.router.navigate(['/user']);
        },
        err => {
          this.router.navigate(['/home']);
        });
      }
    });

  }
}
