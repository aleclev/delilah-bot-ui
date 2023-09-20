import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cookie } from 'ng2-cookies/cookie';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http_client: HttpClient) { }

  public getCurrentDelilahUserInfo(): any {
    let user: any;
    this.http_client.get("http://localhost:8080/user/@me", {headers: {'access_token': Cookie.get("access_token") }}).subscribe(res => {
      user = res;
    }
    );

    return user;
  }

  public getCurrentDiscordUserInfo() {

  }
}
