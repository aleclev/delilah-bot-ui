import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupEventService {

  constructor(private httpClient: HttpClient) { }

  public createGroupObservable(accessToken: string, activity: string, 
    description: string, maxSize: number, startTime: string): Observable<any> {
      
    return this.httpClient.post<any>(environment.delilah.server.url + "/groupEvent",
    {
      activity: activity,
      description: description,
      maxSize: maxSize,
      startTime: startTime
    },
    {
      observe: 'response',
      headers: {
        'access_token': accessToken
      }
    })
  }
}
