import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';

import { PostService } from '../services';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.less']
})
export class RedditComponent implements OnInit {
  allPosts: any[] = [];
  posts: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    const observer = {
      next: () => {
        this.allPosts = this.postService.getPosts();
      },
      error: (err) => console.error(err),
      complete: () => null
    };
    const getPostData = Observable.create((obs) => {
      const checkForPostData = () => {
        setTimeout(() => {
          if (this.postService.hasLoaded) {
            obs.next();
            obs.complete();
          } else {
            checkForPostData();
          }
        }, 1000);
      };
      checkForPostData();
    });
    getPostData.subscribe(observer);
  }

  onSort(category: string) {
    this.posts = this.allPosts.sort((a, b) => a[category] > b[category]);
  }

}
