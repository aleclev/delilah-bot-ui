import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  saveToken(access_token: string, expires_in: number) {
    var expireDate = new Date().getTime() + (1000 * expires_in);
    Cookie.set("access_token", access_token, expireDate);
  }

  public login(): void {
    window.location.href = environment.delilah.discord.oauth2Url;
  }

  isLoggedIn(): boolean {
    return this.checkCredentials();
  }

  public getAccessToken(): string {
    return Cookie.get('access_token');
  }

  checkCredentials() {
    return Cookie.check('access_token');
  } 

  logout() {
    Cookie.delete('access_token');
    window.location.reload();
  }
}
