import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import route file
import { AppRoutingModule } from './app-routing.module';

// components import
import { AppComponent } from './app.component';
import { ListOrdersComponent } from './views/ordenes/list-orders/list-orders.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    ListOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
