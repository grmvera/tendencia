import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    CatalogueComponent,
    PagesComponent
  ],
  exports:[
    DashboardComponent,
    ProductComponent,
    CatalogueComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AuthModule
  ]
})
export class PageModule { }
