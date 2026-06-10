import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PostsComponent } from '@pages/posts/posts.component';

const routesPosts: Routes = [
  {
    path: '',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesPosts)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
