import { Component, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from '../services/message.service';
import { DiscordChannel } from 'src/app/models/discord/discord-channel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.css']
})
export class AdminMessageComponent {

  private channels!: Array<DiscordChannel>

  @ViewChild('messageContent')
  private messageContentTextArea!: ElementRef;

  constructor(private messageService: MessageService,
              private matSnackBar: MatSnackBar,
              private authService: AuthService) {}

  public ngOnInit() {
    this.messageService.getChannels(this.authService.getAccessToken())
    .subscribe(r => this.channels = r);
  }

  public getChannels(): Array<DiscordChannel> {
    return this.channels;
  }

  public createMessage(channelId: string, messageContent: string) {
    this.messageService.createMessageObservable(this.authService.getAccessToken(), channelId, messageContent)
      .subscribe(
        {
          next: () => {
            this.matSnackBar.open("Message successfully sent!", undefined, {duration: 7000});
            this.messageContentTextArea.nativeElement.value = '';
          },
          error: () => {
            this.matSnackBar.open("Error! Cannot send message!", undefined, {duration: 7000})
          }
        });
  }

  public updateMessage(channelId: string, messageId: string, messageContent: string) {
    this.messageService.updateMessageObservable(this.authService.getAccessToken(), 
      channelId, messageId, messageContent)
    .subscribe({
      next: () => {
        this.matSnackBar.open("Message updated!", undefined, {duration: 7000})
      },
      error: () => {
        this.matSnackBar.open("Error! Message could not be updated!", undefined, {duration: 7000})
      }
    })
  }

  public loadMessageContent(channelId: string, messageId: string) {
    this.messageService.getMessageContentObservable(this.authService.getAccessToken(), channelId, messageId)
    .subscribe({
      next: (r) => {
        this.messageContentTextArea.nativeElement.value = r.content;
        this.matSnackBar.open("Message content loaded!", undefined, {duration: 7000})
      },
      error: () => {
        this.matSnackBar.open("Error! Cannot load message content!", undefined, {duration: 7000})
      }
    })
  }
}
