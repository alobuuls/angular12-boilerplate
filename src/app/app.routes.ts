import { Routes } from '@angular/router';

// Guard
import { ProtectedRouteGuard } from '@guards/protected-route.guard';

// Component
import { NotFoundComponent } from '@pages/404/not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@pages/home/home.module').then(m => m.HomeModule)
  },

  {
    path: 'about',
    loadChildren: () => import('@pages/about/about.module').then(m => m.AboutModule)
  },

  {
    path: 'pokemons',
    loadChildren: () => import('@pages/pokemons/pokemons.module').then(m => m.PokemonsModule)
  },

  {
    path: 'photos',
    loadChildren: () => import('@pages/photos/photos.module').then(m => m.PhotosModule)
  },

  {
    path: 'forms',
    loadChildren: () => import('@pages/forms/forms.page.module').then(m => m.FormsPageModule)
  },

  {
    path: 'admin',
    loadChildren: () => import('@pages/admin/admin.module').then(m => m.AdminModule),
    canLoad: [ProtectedRouteGuard]
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
