import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth/auth.service';
import { Activity } from 'src/app/models/delilah/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { GroupEventService } from 'src/app/services/group-event.service';

@Component({
  selector: 'app-create-group-event',
  templateUrl: './create-group-event.component.html',
  styleUrls: ['./create-group-event.component.scss']
})
export class CreateGroupEventComponent {

  activities!: Array<Activity>;

  activity!: string;

  @ViewChild('description')
  description!: ElementRef;

  @ViewChild('startTime')
  startTime!: ElementRef;

  @ViewChild('groupSize')
  groupSize!: ElementRef;

  @ViewChild('createButton')
  createButton!: ElementRef;

  discordPostUrl!: string;

  groupCreated: boolean = false;

  constructor(private activityService: ActivityService, 
    private groupEventService: GroupEventService,
    private authService: AuthService,
    private matSnackBar: MatSnackBar) {}

  ngOnInit() {
    this.activityService.getAllActivities()
    .subscribe(r => {
      this.activities = r;
    })
  }

  public activityValid(): boolean {
    if(this.activity) return true;
    return false;
  }

  public descriptionValid(): boolean {
    return this.description.nativeElement.value;
  }

  public groupSizeValid(): boolean {
    let size = this.groupSize.nativeElement.value;
    return size && size > 1 && size <= 12;
  }

  public createGroup() {
    let description: string = this.description.nativeElement.value;
    let groupSize: number = this.groupSize.nativeElement.value;
    let startTime: string;

    if (this.startTime.nativeElement.value) {
      startTime = new Date(this.startTime.nativeElement.value).toISOString();
    } else {
      startTime = new Date().toISOString();
    }
    
    let accessToken: string = this.authService.getAccessToken();

    this.groupEventService.createGroupObservable(accessToken, this.activity, description, groupSize, startTime).subscribe(
      res => {
        let temp = res.headers.get('Location');
        this.discordPostUrl = temp;;
        this.groupCreated = true;
        this.matSnackBar.open("Post Created! You can now view it on Sherpa Run.", undefined, {
          duration: 15000
        })
      }
    );

  }

  public enableCreateButton() {
    return this.activityValid() && this.groupSizeValid() && this.descriptionValid();
  }

  public goToDiscordPost(): void {

    window.location.href = this.discordPostUrl.replace('https', 'discord');
  }

}
