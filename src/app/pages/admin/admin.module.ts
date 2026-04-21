import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { AdminRoutingModule } from '@pages/admin/admin-routing.module';

// Modules
import { SharedModule } from '@shared/shared.module';

// Components
import { AdminComponent } from '@pages/admin/admin.component';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}
