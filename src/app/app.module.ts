import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationService } from './service/information.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LisProductsComponent } from './components/lis-products/lis-products.component';
import { RequestInterceptor } from './interceptor/request.interceptor';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LisProductsComponent,
    CreateProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [InformationService,{provide:HTTP_INTERCEPTORS,useClass:RequestInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
