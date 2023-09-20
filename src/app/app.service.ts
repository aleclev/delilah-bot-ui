import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cookie } from 'ng2-cookies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public clientId = '974717104223825920';
  public redirectUri = 'http://localhost:4200/home';

  constructor(private _http: HttpClient) { }

  saveToken(access_token: string, expires_in: number) {
    var expireDate = new Date().getTime() + (1000 * expires_in);
    Cookie.set("access_token", access_token, expireDate);
    console.log('Obtained Access token');
    window.location.href = 'http://localhost:4200';
  }

  getResource(resourceUrl: any) : Observable<any> {
    var headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 
      'Authorization': 'Bearer ' + Cookie.get('access_token')});
    return this._http.get(resourceUrl, { headers: headers });
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
