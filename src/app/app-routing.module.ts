import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from 'src/app/guards/login.guard';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canMatch: [loginGuard],
    pathMatch: "prefix"
  },
  {
    path: '**',
    redirectTo: 'user',
    canMatch: [loginGuard]
  },
  {
    path: 'login',
    pathMatch: 'prefix',
    component: LoginComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
