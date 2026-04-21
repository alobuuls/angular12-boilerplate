import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PhotosComponent } from '@pages/photos/photos.component';

// Subpages
import { PhotoDetailComponent } from '@pages/photos/detail/photo-detail.component';

export const routesPhotos: Routes = [
  {
    path: '',
    component: PhotosComponent,
  },
  {
    path: ':id',
    component: PhotoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesPhotos)],
  exports: [RouterModule]
})
export class PhotosRoutingModule {}
