import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '../models/delilah/activity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  getAllActivities(): Array<Activity> {

    let activities = new Array();

    this.httpClient.get<Array<Activity>>(environment.delilah.server.url + "/activity/all")
      .subscribe((r) => activities.concat(r))

    return activities;
  }
}
