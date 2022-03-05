import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts=[
  //   { title:"First Post",content:"This is a First post"},
  //   { title:"Second Post",content:"This is a Second post"},
  //   { title:"Third Post",content:"This is a Third post"}
  // ]
  posts:{title: string, content: string}[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
