import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupEventService {

  constructor(private httpClient: HttpClient) { }

  public createGroup(accessToken: string, activity: string, 
    description: string, maxSize: number, startTime: string) {
      
    this.httpClient.post(environment.delilah.server.url + "/groupEvent",
    {
      activity: activity,
      description: description,
      maxSize: maxSize,
      startTime: startTime
    },
    {
      headers: {
        'access_token': accessToken
      }
    })
  }
}
