import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMessageComponent } from './admin-message/admin-message.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
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


const routes: Routes = [
  
  {
    path: 'message',
    component: AdminMessageComponent
  }
]


@NgModule({
  declarations: [
    AdminMessageComponent
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
    MatNativeDateModule
  ]
})
export class AdminModule { }
