import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routing
import { AppRoutingModule } from 'src/app/app-routing.module';

// Modules
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

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
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
