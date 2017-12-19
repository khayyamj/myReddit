import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
    posts: any[];
    url = 'https://www.reddit.com/r/programming/.json';

    constructor(private http: HttpClient) {
        this.setPosts().subscribe(data => console.log(data));
    }

    setPosts(): Observable<Object> {
        return this.http.get(this.url);
    }

    getPosts() {
        return this.posts;
    }
}
