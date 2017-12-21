import { Subject } from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { MatDialog, MatDialogRef } from '@angular/material';


import { PostService } from '../services';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.less']
})
export class RedditComponent implements OnInit {
  allPosts: any[] = [];
  posts: any[] = [];
  searchTerm: string;

  constructor(private postService: PostService,
              public dialog: MatDialog) { }

  ngOnInit() {
    const observer = {
      next: () => {
        this.allPosts = this.postService.getPosts();
        this.onSort();
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
    this.postService.getFilterString().subscribe((term: string) => this.searchPosts(term));
  }

  onSort(category: string = 'title') {
    this.posts = this.allPosts.sort((a, b) => b[category] - a[category]);
  }

  searchPosts(term: string) {
    this.posts = this.allPosts;
    if (term === '') { return; }
    this.posts = this.allPosts.filter(post => {
      let containsTerm = false;
      if (post['title'].toLowerCase().indexOf(term.toLowerCase()) > -1) { containsTerm = true; }
      if (post['num_comments'].toString().indexOf(term) > -1) { containsTerm = true; }
      if (post['score'].toString().indexOf(term) > -1) {containsTerm = true; }
      return containsTerm;
    });
  }

  onSelectPost(index: number) {
    console.log('selected post #', index);
    const dialogRef = this.dialog.open(PostComponent, {
      width: '450px',
      data: {post: this.posts[index]}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
    });
  }

}
