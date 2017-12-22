import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PostService } from '../services/index';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  currentPath = 'home';
  searchTerm: string;

  constructor(private postService: PostService,
              private dialog: MatDialog) {}

  onSetPath(currentPath: string) {
    this.currentPath = currentPath;
  }

  onSearch(event: Event) {
    this.postService.setFilterString(this.searchTerm);
  }

  onLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe();
  }
}
