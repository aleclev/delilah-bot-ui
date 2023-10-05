import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { DiscordUser } from 'src/app/models/discord/discord-user';
import { DiscordUserService } from 'src/app/user/discordUser/discord-user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  discordUser!: DiscordUser;

  constructor(private authService: AuthService, private discordUserService: DiscordUserService) {}

  ngOnInit() {
    this.discordUser = this.discordUserService.getDiscordUser();
  }

  public login(): void {

    this.authService.login();
  }

  public logout(): void {
    this.authService.logout();
  }

  public isLoggedIn(): boolean {

    return this.authService.isLoggedIn();
  }

}
