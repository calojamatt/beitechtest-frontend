import { Component, OnInit } from '@angular/core';

// Service import
import { OrderService } from '../../../services/order.service';
// Domains import
import { Customer } from '../../../domains/customer';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css'],
  providers: [
    OrderService
  ]
})
export class ListOrdersComponent implements OnInit {

  protected customerSelected: Customer;
  protected customerList: any;
  protected orderList: any;
  protected startDate: any;
  protected endDate: any;
  protected customerName = '';

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.findAllCustomer().subscribe(
      result => {
        this.customerList = result;
        console.log('Customer ' + result);
      }, error => {
        console.log('Error en servicio ' + error.message);
      }
    );
  }

  selectCustomerToFindSearchEvent (event, index) {
    this.customerSelected = this.customerList[index];
    if (this.customerSelected !== undefined && this.customerSelected !== null) {
      this.customerName = this.customerSelected.name;
      console.log('Customer Selected Name: ', this.customerSelected.name);
    }
  }

  findCustomerByDate() {
    if (this.customerSelected !== undefined && this.startDate !== undefined && this.endDate !== undefined) {
      this.orderService.findCustomerByDateRange(this.customerSelected.customerId, this.startDate, this.endDate).subscribe(
        result => {
          this.orderList = result;
          console.log('Order List Size ', this.orderList.length);
        }, error => {
          console.log('Error al consultar Ordenes ', error.message);
        }
      );
    }
  }

  getUniquesProductByOrderId(data) {
    const unique = [...new Set(data.map(item => item.productList.name))];
    return unique;
  }

}
