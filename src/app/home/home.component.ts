import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'la-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tags: string[] = ['nodejs', 'angular', 'rxjs', 'react', 'vue']
  recentTags: string[] = ['angular', 'ia', 'productthinking']

  constructor() { }

  ngOnInit(): void {
  }

}
