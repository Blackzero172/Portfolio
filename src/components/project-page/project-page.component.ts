import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  frontEndProjects = [
    {
      name: 'Tesla Copy',
      img: '../../assets/imgs/Tesla-Hero.png',
      link: 'https://tesla-weekend.netlify.app/',
    },
    {
      name: 'Apple Copy',
      img: '../../assets/imgs/Apple-Hero.png',
      link: 'https://apple-weekend.netlify.app/',
    },
    {
      name: 'Amazon Product Copy',
      img: '../../assets/imgs/Amazon-Hero.png',
      link: 'https://amazon-caps-weekend.netlify.app/',
    },
    {
      name: 'Mine2D',
      img: '../../assets/imgs/Minecraft-Hero.png',
      link: 'https://mine2d.netlify.app/',
    },
    {
      name: 'COVID-19 API',
      img: '../../assets/imgs/COVID-Hero.png',
      link: 'https://covid19-dashboard-weekend.netlify.app/',
    },
    {
      name: 'Dice Game',
      img: '../../assets/imgs/Dice-Hero.png',
      link: 'https://dicegame-weekend.netlify.app/',
    },
  ];
  backEndProjects = [
    {
      name: 'E-Commerece Website',
      img: '../../assets/imgs/ECommerce-Hero.png',
      link: 'https://e-commerce-weekend.netlify.app/',
    },
    {
      name: 'Shoes Database',
      img: '../../assets/imgs/Shoes-Hero.png',
      link: 'https://shoesmenu-weekend.netlify.app/',
    },
    {
      name: 'Flashcards Website',
      img: '../../assets/imgs/Cards-Hero.png',
      link: 'https://flashcards-weekend.netlify.app/',
    },
    {
      name: 'Matchmaking Website',
      img: '../../assets/imgs/Matchmaking-Hero.png',
      link: 'https://matchmaker-weekend.netlify.app/',
    },
    {
      name: 'Memory Game(Mid Project)',
      img: '../../assets/imgs/Mid-Hero.png',
      link: 'https://memgame-mid.netlify.app/',
    },
    {
      name: 'Shift Schedueling Website(End Project)',
      img: '../../assets/imgs/End-Hero.png',
      link: 'https://ali-shift-scheduler.herokuapp.com/',
    },
  ];
}
