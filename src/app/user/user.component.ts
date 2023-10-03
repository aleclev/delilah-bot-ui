import { Component, Output } from '@angular/core';
import { DelilahUserService } from './delilahUser/delilah-user.service';
import { DiscordUser } from '../models/discord/discord-user';
import { DelilahUser } from '../models/delilah/delilah-user';
import { DiscordUserService } from './discordUser/discord-user.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  public delilahUser!: DelilahUser;

  public discordUser!: DiscordUser;

  constructor(private authService: AuthService) {}

  public logout() {
    this.authService.logout();
  }
}
