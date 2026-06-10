import { NgModule } from '@angular/core';

// Routing
import { AboutRoutingModule } from '@pages/about/about-routing.module';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { AboutComponent } from '@pages/about/about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    SharedModule,
    AboutRoutingModule
  ]
})
export class AboutModule {}
