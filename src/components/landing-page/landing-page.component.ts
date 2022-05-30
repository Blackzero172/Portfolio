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
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('fade', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', animate('1.5s 0.25s ease-out')),
    ]),
  ],
})
export class LandingPageComponent implements OnInit {
  constructor() {}
  public fadeInStart = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.fadeInStart = true;
    }, 0);
  }
}
