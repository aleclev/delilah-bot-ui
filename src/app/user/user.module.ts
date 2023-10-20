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
import { MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { CreateEntryComponent } from './dictionary/create-entry/create-entry.component';
import { SearchEntryComponent } from './dictionary/search-entry/search-entry.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';

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
    CreateGroupEventComponent,
    CreateEntryComponent,
    SearchEntryComponent
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
    MatSnackBarModule,
    MatTooltipModule,
    MatRippleModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule, 
    NgxMatTimepickerModule,
    NgxMatNativeDateModule
  ],
  bootstrap: [
    UserComponent
  ]
})
export class UserModule { 
  
  constructor() {}
}
