import { Component, Input, OnInit } from '@angular/core';
import {
  faAngular,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faPython,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFlask } from '@fortawesome/free-solid-svg-icons';
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
  @Input() icon = '';
  icons: any = {
    html: faHtml5,
    css: faCss3Alt,
    js: faJsSquare,
    react: faReact,
    angular: faAngular,
    node: faNodeJs,
    mongo: faDatabase,
    flask: faFlask,
    python: faPython,
    scss: faSass,
  };
}
