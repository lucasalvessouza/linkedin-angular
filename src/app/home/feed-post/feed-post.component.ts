import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'la-feed-post',
  templateUrl: './feed-post.component.html',
  styleUrls: ['./feed-post.component.css']
})
export class FeedPostComponent implements OnInit {

  @Input() post

  postReaction

  constructor() { }

  ngOnInit(): void {
  }

  clickReaction(reaction) {
    this.postReaction = reaction
  }

}
