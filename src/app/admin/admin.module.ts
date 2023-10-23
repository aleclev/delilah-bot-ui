import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMessageComponent } from './admin-message/admin-message.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AdminComponent } from './admin.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'message',
        component: AdminMessageComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminMessageComponent,
    AdminComponent
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
    SharedModule
  ]
})
export class AdminModule { }
