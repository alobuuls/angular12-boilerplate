import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Interceptors
import { ApiKeyUnsplashInterceptor } from '@interceptors/api-key-unsplash.interceptor';
import { HeadersInterceptor } from '@interceptors/headers.interceptor';

// Guards
import { ProtectedRouteGuard } from '@guards/protected-route.guard';

// Components
import { MenuComponent } from 'src/app/core/menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    MenuComponent
  ],
  providers: [
    ProtectedRouteGuard,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: HeadersInterceptor
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: ApiKeyUnsplashInterceptor
    }
  ],
})
export class CoreModule {
  // Evita que el módulo se importe más de una vez
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule ya está cargado. Importa solo en AppModule.');
    }
  }
}
