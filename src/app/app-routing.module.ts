import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/page-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NoFoundComponent } from './no-found/no-found.component';



const routes:Routes = [

  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component:NoFoundComponent}

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
   ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
