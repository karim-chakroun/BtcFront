import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddpostsComponent } from '../addposts/addposts.component';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private service:PostService,public dialog: MatDialog) { }
  posts:any;
  ngOnInit(): void {
    this.service.getposts().subscribe(
      res =>{
        this.posts = res;
      },
      err =>{
        console.log(err);
      }

    );
  }

  openDialog() {
    const dref = this.dialog.open(AddpostsComponent);
    
    dref.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }

}
