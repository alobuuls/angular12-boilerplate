import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from '@shared/shared.module';

// Interceptors
import { ApiKeyUnsplashInterceptor } from '@interceptors/api-key-unsplash.interceptor';
import { HeadersInterceptor } from '@interceptors/headers.interceptor';

// Components
import { MenuComponent } from '@core/menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    MenuComponent
  ],
  providers: [
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
