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
      icons: ['html', 'css'],
    },
    {
      name: 'Mine2D',
      description:
        'This game was made as a weekend assignment in the bootcamp and is my first website using Javascript, I felt I did a good job with this one due to the fact that I have been playing Minecraft ever since I was a kid and so I knew the game very well which helped me excel with building this website',
      img: '../../assets/imgs/Minecraft-Hero.png',
      demoLink: 'https://mine2d.netlify.app/',
      codeLink: 'https://github.com/Blackzero172/Minecraft2D',
      icons: ['html', 'css', 'js'],
    },
    {
      name: 'COVID-19 API',
      description:
        'This website was made at the time when COVID-19 was in full outbreak and so it just connected to the situation the world was in at the time,also this is my first website using an external API',
      img: '../../assets/imgs/COVID-Hero.png',
      demoLink: 'https://covid19-dashboard-weekend.netlify.app/',
      codeLink: 'https://github.com/Blackzero172/CovidAPI',
      icons: ['html', 'css', 'js'],
    },
  ];
  backEndProjects = [
    {
      name: 'Flashcards Website',
      description:
        'This project was part of a 2-day marathon where we were asked to make 4 different websites within the time period,also they all have responsiveness,more importantly this is where we started integrating back-end to our projects this one specifically used the MockAPI Service',
      img: '../../assets/imgs/Cards-Hero.png',
      demoLink: 'https://flashcards-weekend.netlify.app/',
      codeLink: 'https://github.com/Blackzero172/FlashCards',
      icons: ['react', 'css'],
    },
    {
      name: 'Memory Game(Mid Project)',
      description:
        'Right here is my Mid Term Project for the bootcamp,I chose a Memory game because I wanted to test the difference between making a game using a game engine such as Unity or Unreal Engine and making one in the browser using ReactJS',
      img: '../../assets/imgs/Mid-Hero.png',
      demoLink: 'https://memgame-mid.netlify.app/',
      codeLink: 'https://github.com/Blackzero172/MemoryGame',
      icons: ['react', 'css'],
    },
    {
      name: 'Shift Schedueling Website(End Project)',
      description:
        "Last but certainly not Least, my Final Project in the bootcamp ,my main reasons for this one is due to the fact that most workplaces use either screenshots of Excel Sheets and the problem with that method is that you can't easily modify and change the schedule and everytime you do you need to notify your workers and this website is a much better alternative for this kind of work ",
      img: '../../assets/imgs/End-Hero.png',
      demoLink: 'https://ali-shift-scheduler.herokuapp.com/',
      codeLink: 'https://github.com/Blackzero172/End_Project',
      icons: ['react', 'css', 'node', 'mongo'],
    },
  ];
}
