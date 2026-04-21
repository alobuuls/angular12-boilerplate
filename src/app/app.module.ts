import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';

// Modules
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

// Routing
import { routes } from 'src/app/app.routes';

// Components
import { AppComponent } from 'src/app/app.component';
import { NotFoundComponent } from '@pages/404/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
