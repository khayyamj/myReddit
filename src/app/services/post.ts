import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
    hasLoaded = false;
    posts: any[];
    url = 'https://www.reddit.com/r/programming/.json';

    constructor(private http: HttpClient) {
        this.setPosts();
    }

    setPosts() {
        this.http.get(this.url)
            .subscribe(response => {
                this.posts = response['data'].children.map(postData => postData.data);
                // console.log(this.posts);
                this.hasLoaded = true;
            });
    }

    getPosts() {
        return this.posts;
    }
}
