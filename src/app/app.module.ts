import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Routing
import { routes } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { ShMenuComponent } from '@sh-components/sh-menu/sh-menu.component';
import { ShTitleComponent } from '@sh-components/sh-title/sh-title.component';

// Pages
import { HomeComponent } from '@pages/home/home.component';
import { AboutComponent } from '@pages/about/about.component';
import { NotFoundComponent } from '@pages/404/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ShMenuComponent,
    ShTitleComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
