import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesModule } from './pages/page.module';

@NgModule({
  declarations: [
      AppComponent,
      PagesComponent,
      NoFoundComponent,
      LoginComponent,
      RegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
      BrowserModule,
      AppRoutingModule,
      PagesModule,
      SharedModule,
      HttpClientModule,
  ]
})
export class AppModule { }
