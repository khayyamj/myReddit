import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [
    PostService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
