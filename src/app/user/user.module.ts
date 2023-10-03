import { NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { LoginComponent } from '../auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateGroupEventComponent } from './groupEvent/create-group-event/create-group-event.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSelectModule } from '@angular/material/select';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

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
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  bootstrap: [
    UserComponent
  ]
})
export class UserModule { 
  
  constructor() {}
}
