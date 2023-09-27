import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  saveToken(access_token: string, expires_in: number) {
    var expireDate = new Date().getTime() + (1000 * expires_in);
    Cookie.set("access_token", access_token, expireDate);
    console.log('Obtained Access token');
  }

  isLoggedIn(): boolean {
    return this.checkCredentials();
  }

  checkCredentials() {
    return Cookie.check('access_token');
  } 

  logout() {
    Cookie.delete('access_token');
    window.location.reload();
  }
}
