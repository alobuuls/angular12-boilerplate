import { Component } from '@angular/core';
import { IMenuItems } from '@interfaces/menu-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

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

    {
      text: 'Fotos',
      path: '/photos'
    },

    {
      text: 'Publicaciones',
      path: '/posts'
    },

    {
      text: 'Formularios',
      path: '/forms'
    },

    {
      text: 'Admin',
      path: '/admin',
      highlight: true
    }
  ];

  constructor() { }
}
