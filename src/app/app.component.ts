import { Component } from '@angular/core';
import { DiscordUser } from './models/discord/discord-user';
import { DelilahUser } from './models/delilah/delilah-user';
import { DelilahUserService } from './user/delilahUser/delilah-user.service';
import { DiscordUserService } from './user/discordUser/discord-user.service';
import { AuthService } from './auth/auth.service';
import { forkJoin } from 'rxjs';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sherpa-run-website-ui';

  discordUser!: DiscordUser;
  delilahUser!: DelilahUser;
  loading: boolean = true;

  constructor(private authService: AuthService,
    private delilahUserService: DelilahUserService, 
    private discordUserService: DiscordUserService,
    private themeService: ThemeService) {}

  async ngOnInit() {

    if (this.authService.isLoggedIn()) {

      await Promise.all([
        this.delilahUserService.reloadDelilahUser(),
        this.discordUserService.reloadDiscordUser()]);
    }

    this.loading = false;
  }

  public displayLightTheme(): boolean {
    return this.themeService.displayLightTheme();
  }

}
