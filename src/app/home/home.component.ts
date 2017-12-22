import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { AuthService } from '../services/index';
import { LoginComponent } from './../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  constructor(private router: Router,
              public authService: AuthService,
              private dialog: MatDialog) {
                this.authService.setCurrentRoute('home');
              }

  onGoToPosts() {
    this.authService.setCurrentRoute('posts');
    this.router.navigate(['/posts']);
  }

  onGoToLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(loginSuccessful => {
      if (loginSuccessful) {
        this.authService.isAuthenticated();
        this.authService.setCurrentRoute('home');
      }
    });
  }
}
