import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageModule } from './pages/page.module';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { NoFoundComponent } from './no-found/no-found/no-found.component';
import { SharedComponent } from './shared/shared/shared.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavLeftComponent } from './shared/nav-left/nav-left.component';

@NgModule({
  declarations: [
    AppComponent,
    NoFoundComponent,
    SharedComponent,
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    NavLeftComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
