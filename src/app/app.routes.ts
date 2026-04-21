import { Routes } from '@angular/router';

// Pages
import { HomeComponent } from '@pages/home/home.component';
import { AboutComponent } from '@pages/about/about.component';
import { PokemonsComponent } from '@pages/pokemons/pokemons.component';
import { PhotosComponent } from '@pages/photos/photos.component';
import { NotFoundComponent } from '@pages/404/not-found.component';

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
    path: 'photos',
    component: PhotosComponent
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
