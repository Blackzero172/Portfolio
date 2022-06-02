import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() project = {
    name: '',
    description: '',
    img: '',
    demoLink: '',
    codeLink: '',
  };
  @Input() isReverse = false;
}
