import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '../models/delilah/activity';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  getAllActivities(): Observable<Array<Activity>> {

    return this.httpClient.get<Array<Activity>>(environment.delilah.server.url + "/activity/all")
  }
}
