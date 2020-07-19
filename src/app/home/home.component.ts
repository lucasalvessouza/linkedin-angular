import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'la-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tags: string[] = ['nodejs', 'angular', 'rxjs', 'react', 'vue']

  constructor() { }

  ngOnInit(): void {
  }

}
