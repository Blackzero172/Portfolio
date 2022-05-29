import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: [
    './landing-page.component.scss',
    '../../_variables.scss',
    '../../_functions.scss',
  ],
  animations: [
    trigger('fade', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', animate('1s ease-in')),
    ]),
  ],
})
export class LandingPageComponent implements OnInit {
  constructor() {}
  public fadeInStart = false;
  ngOnInit(): void {
    this.fadeInStart = true;
  }
}
