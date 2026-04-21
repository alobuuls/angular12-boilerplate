import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { PhotosRoutingModule } from '@pages/photos/photos-routing.module';

// Modules
import { SharedModule } from '@shared/shared.module';

// Components
import { PhotosComponent } from '@pages/photos/photos.component';
import { PhotoDetailComponent } from '@pages/photos/detail/photo-detail.component';

// Routes

@NgModule({
  declarations: [
    PhotosComponent,
    PhotoDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule {}
