import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RedditComponent } from './reddit/reddit.component';
import { PostService } from './services/post';

@NgModule({
  declarations: [
    AppComponent,
    RedditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    PostService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
