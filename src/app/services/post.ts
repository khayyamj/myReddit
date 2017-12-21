import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class PostService {
    hasLoaded = false;
    posts: any[];
    url = 'https://www.reddit.com/r/programming/.json';
    filterString: string;
    private searchUpdated: Subject<string> = new Subject<string>();

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

    setFilterString(term: string) {
        this.searchUpdated.next(term);
    }

    getFilterString() {
        return this.searchUpdated.asObservable();
    }
}
