import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { PostsRoutingModule } from '@pages/posts/posts-routing.module';

// Modules
import { SharedModule } from '@shared/shared.module';

// Components
import { PostsComponent } from '@pages/posts/posts.component';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule
  ]
})
export class PostsModule {}
