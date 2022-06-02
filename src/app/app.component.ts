import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMoon,
  faPhone,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  github = faGithub;
  linkedin = faLinkedin;
  mail = faEnvelope;
  phone = faPhone;
  isDark = false;
  toggleDark() {
    this.isDark = !this.isDark;
  }
  dark = faMoon;
  light = faSun;
}
