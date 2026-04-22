import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AdminComponent } from '@pages/admin/admin.component';

const routesAdmin: Routes = [
  {
    path: '',
    component: AdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
