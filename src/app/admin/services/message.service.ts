import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscordChannel } from 'src/app/models/discord/discord-channel';
import { DiscordMessage } from 'src/app/models/discord/discord-message';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  updateMessageObservable(accessToken: string, 
    channelId: string, 
    messageId: string, 
    messageContent: string): Observable<any> {
    
      return this.httpClient.patch<null>(environment.delilah.server.url + "/admin/message", {content: messageContent},
        {params: {messageId: messageId, channelId: channelId}, headers: {"access_token": accessToken }});
  }

  constructor(private httpClient: HttpClient) { }

  public getChannels(accessToken: string): Observable<Array<DiscordChannel>> {

    return this.httpClient
    .get<Array<DiscordChannel>>(environment.delilah.server.url + "/admin/message/channels",
    {headers: {"access_token": accessToken}})
  }

  public createMessageObservable(accessToken: string, channelId: string, content: string): Observable<null> {
    return this.httpClient.post<null>(environment.delilah.server.url + "/admin/message?channelId=" + channelId, 
    {content: content}, 
    {headers: {"access_token": accessToken}})
  }

  public getMessageContentObservable(accessToken: string, channelId: string, messageId: string): Observable<DiscordMessage> {
    return this.httpClient
    .get<DiscordMessage>(environment.delilah.server.url + "/admin/message", 
    {
      params: {messageId: messageId, channelId: channelId}, 
      headers: {"access_token": accessToken}
    });
  }

}
