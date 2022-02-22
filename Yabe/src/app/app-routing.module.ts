import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeOffersComponent } from './change-offers/change-offers.component';
import { CreateOffersComponent } from './create-offers/create-offers.component';
import { LoginComponent } from './login/login.component';
import { OffersComponent } from './offers/offers.component';
import { OwnOffersComponent } from './own-offers/own-offers.component';
import { RegisterComponent } from './register/register.component';
import { StartsiteComponent } from './startsite/startsite.component';

export const routes: Routes = [] = [
  {
    path: 'start',
    component: StartsiteComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'showown',
    component: OwnOffersComponent
  },
  {
    path: 'create',
    component: CreateOffersComponent
  },
  {
    path: 'change',
    component: ChangeOffersComponent
  },
  {
    path: 'show',
    component: OffersComponent
  },
  {
    path: '**', 
    redirectTo: 'start', 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ LoginComponent, RegisterComponent, OwnOffersComponent, OffersComponent]