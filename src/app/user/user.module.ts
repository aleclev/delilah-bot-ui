import { NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DiscordUser } from '../models/discord/discord-user';
import { DiscordUserService } from './discord-user.service';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: UserComponent
  }
]

@NgModule({
  declarations: [
    UserComponent,
    DictionaryComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [
    UserComponent
  ]
})
export class UserModule { 
  
  constructor(private discordUserService: DiscordUserService) {}

  ngOnInit() {
    this.discordUserService.getObservableDiscordUser().subscribe(res => {
      
    })
  }
}
