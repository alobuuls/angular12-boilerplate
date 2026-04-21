import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { ProtectedRouteGuard } from '@guards/protected-route.guard';

// Components
import { AdminComponent } from '@pages/admin/admin.component';

const routesAdmin: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [ProtectedRouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
