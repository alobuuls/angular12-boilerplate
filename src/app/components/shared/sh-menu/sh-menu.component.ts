import { Component } from '@angular/core';
import { IMenuItems } from '@interfaces/menu-items';

@Component({
  selector: 'sh-menu',
  templateUrl: './sh-menu.component.html',
  styleUrls: ['./sh-menu.component.css']
})
export class ShMenuComponent {

  menuList: IMenuItems[] = [
    {
      text: 'Inicio',
      path: '/home'
    },

    {
      text: 'Nosotros',
      path: '/about'
    },

    {
      text: 'Pokemones',
      path: '/pokemons'
    },
  ];

  constructor() { }
}
