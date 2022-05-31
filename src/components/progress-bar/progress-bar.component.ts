import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() label = '';
  @Input() percent = '40';
  @Input() type = '';
}
