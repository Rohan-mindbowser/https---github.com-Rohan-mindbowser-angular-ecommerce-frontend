import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureModule } from './modules/feature/feature.module';
import { ProductsModule } from './modules/products/products.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { InterceptorInterceptor } from './services/interceptor.interceptor';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [AppComponent, ExamplePdfViewerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    ProductsModule,
    HttpClientModule,
    NgToastModule,
    NgxExtendedPdfViewerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
