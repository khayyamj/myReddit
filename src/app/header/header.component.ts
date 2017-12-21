import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  currentPath = 'home';

  onSetPath(currentPath: string) {
    this.currentPath = currentPath;
    console.log('current path: ', this.currentPath);
  }
}
