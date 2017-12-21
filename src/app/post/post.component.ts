import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  post: any;
  constructor(private dialogRef: MatDialogRef<PostComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.post = data.post;
  }

  ngOnInit() {
    console.log('dialog data: ', this.post);

  }

}
