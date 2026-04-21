import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { AboutComponent } from '@pages/about/about.component';

const routesAbout: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesAbout)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
