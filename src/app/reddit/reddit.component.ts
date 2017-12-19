import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/index';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.less']
})
export class RedditComponent implements OnInit {
  posts;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts;
    console.log('in reddit -> posts: ', this.posts);
  }

}
