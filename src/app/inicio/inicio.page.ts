import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string,
  name: string,
  redirecTo: string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[]=[
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    {
      icon: 'people-circle-outline',
      name: 'Clientes',
      redirecTo: '/clientes'
    },
    {
      icon: 'color-wand-outline',
      name: 'Actions',
      redirecTo: '/actions'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirecTo: '/alert'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
