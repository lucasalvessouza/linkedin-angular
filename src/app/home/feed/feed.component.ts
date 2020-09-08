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
        avatar: 'assets/img/posts/avatar1.png',
        time: '3h'
      },
      reactions: ['love', 'celebrate'],
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor feugiat dolor,
      non imperdiet risus porttitor ut. Etiam non turpis quis justo vulputate blandit.
      Proin facilisis ornare suscipit. Sed vel lorem sodales, rhoncus odio facilisis, elementum elit.
      Nulla egestas egestas interdum. In tellus ante, placerat non velit luctus, ullamcorper porttitor nibh
      `,
      image: 'assets/img/posts/post1.jpeg'
    },
    {
      related: {
        name: 'Outro Fulano',
        action: 'comments'
      },
      actor: {
        name: 'Luke Skywalker',
        avatar: 'assets/img/posts/avatar2.png',
        description: 'Recruiting, Global Product at Facebook',
        time: '11h'
      },
      reactions: ['like', 'love', 'interesting'],
      text: `Curabitur ornare, metus at fringilla faucibus, diam lectus tincidunt ex, et euismod lacus massa at est.
      Donec non laoreet nulla, et commodo quam. Phasellus ut turpis et erat maximus lobortis.
      Proin feugiat dignissim nibh, in porttitor mi consequat nec. Vivamus auctor elit non tempus luctus.
      `,
      image: 'assets/img/posts/post2.jpg'
    },
    {
      related: null,
      actor: {
        name: 'Mary Jane',
        avatar: 'assets/img/posts/avatar3.png',
        description: 'QA at Google',
        time: '11h'
      },
      reactions: ['love'],
      text: `Suspendisse vestibulum fringilla pharetra. Pellentesque vel sapien urna. Integer molestie diam vel ultricies sodales.
      In sit amet nulla sed felis cursus sagittis.
      `,
      image: 'assets/img/posts/post3.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
