import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'la-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: any[] = [
    {
      related: {
        name: 'Fulano de tal',
        action: 'like'
      },
      actor: {
        name: 'John Dere',
        description: 'Fullstack Developer',
        time: '3h'
      },
      reactions: ['love', 'celebrate']
    },
    {
      related: {
        name: 'Outro Fulano',
        action: 'comments'
      },
      actor: {
        name: 'Luke Skywalker',
        description: 'Recruiting, Global Product at Facebook',
        time: '11h'
      },
      reactions: ['like', 'love', 'interesting']
    },
    {
      related: null,
      actor: {
        name: 'Mary Jane',
        description: 'QA at Google',
        time: '11h'
      },
      reactions: ['love']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
