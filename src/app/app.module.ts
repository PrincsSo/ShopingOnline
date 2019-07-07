import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { ServiceComponent } from './service/service.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { ConfirmComponent } from './confirm/confirm.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {StoreService } from './store.service';
import { UserShowComponent } from './user-show/user-show.component';
import { ProductsShowComponent } from './products-show/products-show.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShopComponent,
    AboutUsComponent,
    AdminComponent,
    ServiceComponent,
    ListComponent,
    ConfirmComponent,
    UserShowComponent,
    ProductsShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
      HttpClientModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
