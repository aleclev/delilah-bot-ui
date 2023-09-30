import { Component } from '@angular/core';
import { Activity } from 'src/app/models/delilah/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-create-group-event',
  templateUrl: './create-group-event.component.html',
  styleUrls: ['./create-group-event.component.css']
})
export class CreateGroupEventComponent {

  constructor(private activityService: ActivityService) {}

  getAllActivities(): Array<Activity> {
    return this.activityService.getAllActivities();
  }

}
