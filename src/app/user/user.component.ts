import { Component, Output } from '@angular/core';
import { DelilahUserService } from './delilah-user.service';
import { DiscordUser } from '../models/discord/discord-user';
import { DiscordUserService } from './discord-user.service';
import { DelilahUser } from '../models/delilah/delilah-user';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  public delilahUser!: DelilahUser;

  public discordUser!: DiscordUser;

  constructor(private delilahUserService: DelilahUserService, 
    private discordUserService: DiscordUserService, 
    private authService: AuthService) {}

  ngOnInit() {
    this.delilahUserService.getCurrentDelilahUserInfo().subscribe(user => {
      this.delilahUser = user;
      console.log(user);
    });
    this.discordUserService.getObservableDiscordUser().subscribe(user => {
      this.discordUser = user;
    });
  }

  public logout() {
    this.authService.logout();
  }
}
