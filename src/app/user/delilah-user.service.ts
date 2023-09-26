import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cookie } from 'ng2-cookies/cookie';
import { Observable } from 'rxjs';
import { DelilahUser } from '../models/delilah/delilah-user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DelilahUserService {

  constructor(private http_client: HttpClient) { }

  public getCurrentDelilahUserInfo(): Observable<DelilahUser> {
    return this.http_client.get<DelilahUser>(environment.delilah.server.url + '/user/@me', {headers: {'access_token': Cookie.get("access_token") }});
  }
}
