import { Component, Input, OnInit } from '@angular/core';
import {
  faAngular,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFlask } from '@fortawesome/free-solid-svg-icons';

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
    icons: [''],
  };
  @Input() isReverse = false;
  iconsDict: any = {
    html: faHtml5,
    css: faCss3Alt,
    js: faJsSquare,
    react: faReact,
    angular: faAngular,
    node: faNodeJs,
    mongo: faDatabase,
    flask: faFlask,
    python: faPython,
  };
}
