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
        this.setPosts().subscribe(response => {
            this.posts = response.data.children;
            console.log(this.posts.map(post => post.data));
            this.hasLoaded = true;
        });
    }

    setPosts(): Observable<Object> {
        return this.http.get(this.url);
    }

    getPosts() {
        return this.posts.map(postData => postData.data);
    }
}
