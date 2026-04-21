import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Routing
import { routes } from './app.routes';

// Interceptors
import { HeadersInterceptor } from '@interceptors/headers.interceptor';
import { ApiKeyUnsplashInterceptor } from '@interceptors/api-key-unsplash.interceptor';

// Components
import { AppComponent } from './app.component';
import { ShMenuComponent } from '@sh-components/sh-menu/sh-menu.component';
import { ShTitleComponent } from '@sh-components/sh-title/sh-title.component';
import { ShLoaderComponent } from '@sh-components/sh-loader/sh-loader.component';

// Pages
import { HomeComponent } from '@pages/home/home.component';
import { AboutComponent } from '@pages/about/about.component';
import { PokemonsComponent } from '@pages/pokemons/pokemons.component';
import { PhotosComponent } from '@pages/photos/photos.component';
import { PhotoDetailComponent } from '@pages/photos/detail/photo-detail.component';
import { AdminComponent } from '@pages/admin/admin.component';
import { NotFoundComponent } from '@pages/404/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ShMenuComponent,
    ShTitleComponent,
    ShLoaderComponent,
    HomeComponent,
    AboutComponent,
    PokemonsComponent,
    PhotosComponent,
    PhotoDetailComponent,
    AdminComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: HeadersInterceptor
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: ApiKeyUnsplashInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
