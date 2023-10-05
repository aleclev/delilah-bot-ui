import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Observable, firstValueFrom } from 'rxjs';
import { DiscordUser } from 'src/app/models/discord/discord-user';

@Injectable({
  providedIn: 'root'
})
export class DiscordUserService {

  private discordUser!: DiscordUser;

  constructor(private httpClient: HttpClient) { }

  public getDiscordUser(): DiscordUser {
    return this.discordUser;
  }

  public async reloadDiscordUser(): Promise<DiscordUser> {
    this.discordUser = await firstValueFrom(this.getDiscordUserObservable())
    
    return this.discordUser;
  }

  public getDiscordUserObservable(): Observable<DiscordUser> {

    return this.httpClient.get<DiscordUser>('https://discord.com/api/users/@me', {headers: {'Authorization': 'Bearer ' + Cookie.get('access_token')}})
  }
}
