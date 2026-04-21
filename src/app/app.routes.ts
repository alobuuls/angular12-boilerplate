import { Routes } from '@angular/router';

// Guard
import { ProtectedRouteGuard } from '@guards/protected-route.guard';

// Pages
import { HomeComponent } from '@pages/home/home.component';
import { AboutComponent } from '@pages/about/about.component';
import { PokemonsComponent } from '@pages/pokemons/pokemons.component';
import { PhotosComponent } from '@pages/photos/photos.component';
import { PhotoDetailComponent } from '@pages/photos/detail/photo-detail.component';
import { AdminComponent } from '@pages/admin/admin.component';
import { NotFoundComponent } from '@pages/404/not-found.component';
import { FormsPageComponent } from '@pages/forms/forms.page.component';

// Subpages
import { FormTemplateComponent } from '@pages/forms/form-template/form-template.component';
import { FormControlComponent } from '@pages/forms/form-control/form-control.component';
import { FormGroupComponent } from '@pages/forms/form-group/form-group.component';
import { FormBuilderComponent } from '@pages/forms/form-builder/form-builder.component';

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
    path: 'admin',
    component: AdminComponent,
    canActivate: [ProtectedRouteGuard]
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
    path: 'photos/:id',
    component: PhotoDetailComponent
  },

  {
    path: 'forms',
    component: FormsPageComponent,
    children: [
      {
        path: 'ng-model',
        component: FormTemplateComponent
      },

      {
        path: 'control',
        component: FormControlComponent
      },

      {
        path: 'group',
        component: FormGroupComponent
      },

      {
        path: 'builder',
        component: FormBuilderComponent
      },
      {
        path: '',
        redirectTo: 'ng-model',
        pathMatch: 'full'
      },

      {
        path: '**',
        redirectTo: 'ng-model'
      }
    ]
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
