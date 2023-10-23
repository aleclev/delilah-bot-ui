import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ForbiddenComponent } from '../shared/forbidden/forbidden.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private authService: AuthService) {

  }

  public isAdmin() {
    return this.authService.isAdmin();
  }

}
