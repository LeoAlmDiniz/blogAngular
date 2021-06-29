import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[];
  post: Post = new Post;

  constructor(private postService: PostService) {
    this.listPost = [];
    this.post = new Post;
   }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (data: Post[]) => this.listPost = data )
  }

  sendMessage() {
    this.postService.postPost(this.post).subscribe(
      (data: Post) => {
        this.post = data
        location.assign('/feed')})
  }

}



