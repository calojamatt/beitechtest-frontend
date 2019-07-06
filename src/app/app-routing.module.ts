import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import components for routing
import { ListOrdersComponent } from './views/ordenes/list-orders/list-orders.component';


const routes: Routes = [
  // Home Route
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'list-orders',
    component: ListOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
