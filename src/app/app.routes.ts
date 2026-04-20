import { Routes } from '@angular/router';

// Pages
import { HomeComponent } from '@pages/home/home.component';
import { NotFoundComponent } from '@pages/404/not-found.component';
import { AboutComponent } from '@pages/about/about.component';
import { PokemonsComponent } from '@pages/pokemons/pokemons.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'pokemons',
    component: PokemonsComponent
  },

  {
    path: '404',
    component: NotFoundComponent,
    data: {
      hideMenu: true
    }
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: '404'
  }
];
