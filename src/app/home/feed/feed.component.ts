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
        hours: 3
      }
    },
    {
      related: {
        name: 'Outro Fulano',
        action: 'comments'
      },
      actor: {
        name: 'Luke Skywalker',
        description: 'Recruiting, Global Product at Facebook',
        hours: 11
      }
    },
    {
      related: null,
      actor: {
        name: 'Mary Jane',
        description: 'QA at Google',
        hours: 11
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
