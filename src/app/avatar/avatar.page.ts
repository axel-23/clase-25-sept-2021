import { Component, OnInit } from '@angular/core';

interface Avatar {
  icon: string,
  name: string
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  avatares: Avatar[] = [
    {
      icon: '../../assets/anonymous.jpg',
      name: 'Avatar 1'
    },
    {
      icon: '../../assets/anonymous.jpg',
      name: 'Avatar 2'
    },
    {
      icon: '../../assets/anonymous.jpg',
      name: 'Avatar 3'
    },
    {
      icon: '../../assets/anonymous.jpg',
      name: 'Avatar 4'
    },
    {
      icon: '../../assets/anonymous.jpg',
      name: 'Avatar 5'
    },
    {
      icon: '../../assets/anonymous.jpg',
      name: 'Avatar 6'
    },
    {
      icon: '../../assets/anonymous.jpg',
      name: 'Avatar 7'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
