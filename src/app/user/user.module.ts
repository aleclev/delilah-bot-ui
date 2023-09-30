import { NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DiscordUserService } from './discord-user.service';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateGroupEventComponent } from './groupEvent/create-group-event/create-group-event.component';

const routes: Routes = [
  
  {
    path:'',
    component: UserComponent,
    children: [
      {
        path: 'dictionary',
        component: DictionaryComponent
      },
      {
        path: 'groupEvent',
        component: CreateGroupEventComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    UserComponent,
    DictionaryComponent,
    LoginComponent,
    CreateGroupEventComponent
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
