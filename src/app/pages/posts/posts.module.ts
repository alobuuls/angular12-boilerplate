import { NgModule } from '@angular/core';

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
    SharedModule,
    PostsRoutingModule
  ]
})
export class PostsModule {}
