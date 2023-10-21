import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscordChannel } from 'src/app/models/discord/discord-channel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) { }

  public getChannels(): Observable<Array<DiscordChannel>> {

    return this.httpClient.get<Array<DiscordChannel>>(environment.delilah.server.url + "/admin/message/channels")
  }

  public createMessage(channelId: string, content: string): Observable<null> {
    return this.httpClient.post<null>(environment.delilah.server.url + "/admin/message?channelId=" + channelId, {content: content})
  }
}
