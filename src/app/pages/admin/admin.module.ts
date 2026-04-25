import { NgModule } from '@angular/core';

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
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}
