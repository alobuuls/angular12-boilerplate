import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { HomeRoutingModule } from '@pages/home/home-routing.module';

// Modules
import { SharedModule } from '@shared/shared.module';

// Components
import { HomeComponent } from '@pages/home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
