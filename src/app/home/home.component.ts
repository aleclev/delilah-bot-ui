import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DiscordUser } from '../models/discord/discord-user';
import { DiscordUserService } from '../user/discordUser/discord-user.service';


@Component({
  selector: 'app-home',
  providers: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('homeTitle') homeTitle!: ElementRef;
  @ViewChild('mainBlock') mainBlock!: ElementRef;
  @ViewChild('progressBar') progressBar!: ElementRef;

  @ViewChild('sidenav') sidenav!: ElementRef;

  discordUser!: DiscordUser;

  constructor(private authService: AuthService, private discordUserService: DiscordUserService) {
  }

  ngOnInit() {
      this.discordUser = this.discordUserService.getDiscordUser();
  }

  async ngAfterViewInit(): Promise<void> { 
    await this.playEntryAnimation();
  }

  public isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  public login() {
    this.authService.login()
  }

  private async playEntryAnimation(): Promise<void> {
    let message = 'delilah_dashboard_0.2.0'.split('');
    let progressBarMessage = ('[' + '.'.repeat(40) + ']').split('');
    let bar = '*';
    for (let letter in message) {
      this.homeTitle.nativeElement.innerHTML += message[letter];
      await new Promise(r => setTimeout(r, 35));
    }
    
    this.progressBar.nativeElement.style.visibility = "visible";
    for (let idx = 1; idx <= progressBarMessage.length - 2; idx++) {
      progressBarMessage[idx] = bar;
      this.progressBar.nativeElement.innerHTML = progressBarMessage.join('');
      await new Promise(r => setTimeout(r, Math.floor(Math.random() * (45))));
    }
    this.progressBar.nativeElement.style.visibility = "hidden";

    await new Promise(r => setTimeout(r, 200));
    this.mainBlock.nativeElement.style.visibility = "visible";
  }
}
