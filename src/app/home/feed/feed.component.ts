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
      }
    },
    {
      related: {
        name: 'Outro Fulano',
        action: 'comments'
      }
    },
    {
      related: null
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
