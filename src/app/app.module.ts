import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { routes } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { ShMenuComponent } from '@sh-components/sh-menu/sh-menu.component';
import { ShTitleComponent } from '@sh-components/sh-title/sh-title.component';
import { ShLoaderComponent } from '@sh-components/sh-loader/sh-loader.component';

// Pages
import { HomeComponent } from '@pages/home/home.component';
import { AboutComponent } from '@pages/about/about.component';
import { PokemonsComponent } from '@pages/pokemons/pokemons.component';
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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
