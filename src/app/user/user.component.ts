import { Component } from '@angular/core';
import { UserService } from './user.service';
import { DiscordUser } from '../models/discord/discord-user';
import { DiscordUserService } from './discord-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  public delilahUser: any;
  public discordUser: DiscordUser | undefined;

  constructor(private userService: UserService, private discordUserService: DiscordUserService) {}

  ngOnInit() {
    this.delilahUser = this.userService.getCurrentDelilahUserInfo();
    this.discordUserService.getObservableDiscordUser().subscribe(user => {
      this.discordUser = user;
    });
  }
}
