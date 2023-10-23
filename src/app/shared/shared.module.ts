import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ForbiddenComponent,
    ToolbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  exports: [
    ForbiddenComponent,
    ToolbarComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
