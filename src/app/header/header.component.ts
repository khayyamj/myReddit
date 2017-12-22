import { Component } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PostService, AuthService } from '../services/index';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  // currentPath = 'home';
  searchTerm: string;
  show = false;

  constructor(private postService: PostService,
              private dialog: MatDialog,
              public authService: AuthService,
              private router: Router) {}

  onSetPath(currentPath: string) {
    this.authService.setCurrentRoute(currentPath);
  }

  shouldShow() {
    return this.authService.currentRoute === 'posts' && this.authService.authenticated;
  }

  onSearch(event: Event) {
    this.postService.setFilterString(this.searchTerm);
  }

  onLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(loginSuccessful => {
      if (loginSuccessful) {
        this.authService.isAuthenticated();
        this.authService.setCurrentRoute('posts');
        this.router.navigate(['/posts']);
      }
    });
  }

  onLogout() {
    this.authService.isLoggedOut();
    this.router.navigate(['/home']);
  }
}
