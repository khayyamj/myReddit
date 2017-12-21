import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { PostService } from '../services/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  currentPath = 'home';
  searchTerm: string;

  constructor(private postService: PostService) {}

  onSetPath(currentPath: string) {
    this.currentPath = currentPath;
  }

  onSearch(event: Event) {
    this.postService.setFilterString(this.searchTerm);
  }
}
