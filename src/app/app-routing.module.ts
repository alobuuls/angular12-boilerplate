
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

// Routing
import { globalRoutes } from 'src/app/app.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(globalRoutes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
