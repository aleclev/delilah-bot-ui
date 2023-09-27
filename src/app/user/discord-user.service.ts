import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { DiscordUser } from '../models/discord/discord-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscordUserService {

  constructor(private httpClient: HttpClient) { }

  getObservableDiscordUser(): Observable<DiscordUser> {

    return this.httpClient.get<DiscordUser>('https://discord.com/api/users/@me', {headers: {'Authorization': 'Bearer ' + Cookie.get('access_token')}})
  }
}
