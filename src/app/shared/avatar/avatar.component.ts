import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'la-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() size: string
  @Input() img: string

  constructor() { }

  ngOnInit(): void {
  }

}
