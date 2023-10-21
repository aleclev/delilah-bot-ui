import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { DiscordChannel } from 'src/app/models/discord/discord-channel';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.css']
})
export class AdminMessageComponent {

  private channels!: Array<DiscordChannel>

  constructor(private messageService: MessageService) {}

  public ngOnInit() {
    this.messageService.getChannels()
    .subscribe(r => this.channels = r);
  }

  public getChannels(): Array<DiscordChannel> {
    return this.channels;
  }

  public createMessage(channelId: string, messageContent: string) {
    this.messageService.createMessage(channelId, messageContent).subscribe();
  }

}
