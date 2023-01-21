import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';



const routes:Routes = [
  //rutas protegidas
  {path:'dashboard', component:PagesComponent,
children:[
  {path:'', component:DashboardComponent},
  {path: 'product', component:ProductComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
]
},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule,
  ]
})
export class PagesRoutingModule { }
