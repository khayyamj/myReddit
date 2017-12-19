import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';

import { PostService } from '../services';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.less']
})
export class RedditComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    const observer = {
      next: () => {
        this.posts = this.postService.getPosts();
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

}
