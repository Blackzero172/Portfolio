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
      name: 'QWERTY-It(Computer Store)',
      description:
        'This is a mockup computer store,It was built using only HTML5 and CSS3 and is one of my first websites (2nd week of the bootcamp)',
      img: '../../assets/imgs/QWERTY-Hero.png',
      demoLink: 'https://apple-weekend.netlify.app/',
      codeLink: 'https://github.com/Blackzero172/QWERTY',
    },
    {
      name: 'Mine2D',
      description:
        'This game was made as a weekend assignment in the bootcamp and is my first website using Javascript, I felt I did a good job with this one due to the fact that I have been playing Minecraft ever since I was a kid and so I knew the game very well which helped me excel with building this website',
      img: '../../assets/imgs/Minecraft-Hero.png',
      demoLink: 'https://mine2d.netlify.app/',
      codeLink: 'https://github.com/Blackzero172/Minecraft2D',
    },
    {
      name: 'COVID-19 API',
      description:
        'This website was made at the time when COVID-19 was in full outbreak and so it just connected to the situation the world was in at the time,also is my first website using an external API',
      img: '../../assets/imgs/COVID-Hero.png',
      demoLink: 'https://covid19-dashboard-weekend.netlify.app/',
      codeLink: 'https://github.com/Blackzero172/CovidAPI',
    },
  ];
  backEndProjects = [
    {
      name: 'Flashcards Website',
      description: '',
      img: '../../assets/imgs/Cards-Hero.png',
      demoLink: 'https://flashcards-weekend.netlify.app/',
      codeLink: 'https://github.com/Blackzero172/FlashCards',
    },
    {
      name: 'Memory Game(Mid Project)',
      description: '',
      img: '../../assets/imgs/Mid-Hero.png',
      demoLink: 'https://memgame-mid.netlify.app/',
      codeLink: 'https://github.com/Blackzero172/MemoryGame',
    },
    {
      name: 'Shift Schedueling Website(End Project)',
      description: '',
      img: '../../assets/imgs/End-Hero.png',
      demoLink: 'https://ali-shift-scheduler.herokuapp.com/',
      codeLink: 'https://github.com/Blackzero172/End_Project',
    },
  ];
}
