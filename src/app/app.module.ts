import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {LayoutModule} from '@angular/cdk/layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatRippleModule } from '@angular/material/core'
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from './shared/shared.module';
import { GettingStartedComponent } from './tutorial/getting-started/getting-started.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GettingStartedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    LayoutModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatTooltipModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
