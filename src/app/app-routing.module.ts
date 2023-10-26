import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from 'src/app/auth/login.guard';
import { LoginComponent } from './auth/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { GettingStartedComponent } from './tutorial/getting-started/getting-started.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canMatch: [loginGuard],
    pathMatch: "prefix"
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canMatch: [loginGuard],
    pathMatch: "prefix"
  },
  {
    path: 'login',
    pathMatch: 'prefix',
    component: LoginComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'getting-started',
    component: GettingStartedComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  MatButtonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
