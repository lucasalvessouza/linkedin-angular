import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'la-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('headerShow', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(0px, -20px)' }),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  headerState: string = 'ready'

  constructor() { }

  ngOnInit(): void {
  }

}
