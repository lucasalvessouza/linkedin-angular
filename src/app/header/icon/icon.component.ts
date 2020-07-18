import { Component, OnInit, Input } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'la-header-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input() icon: string
  @Input() to: string

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
