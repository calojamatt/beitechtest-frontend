import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiBaseUrl = `${environment.baseUrl}`;

  constructor(private httpClient: HttpClient) { }

  findAllCustomer(): Observable<any> {
    const path = `${this.apiBaseUrl}/customer/listAllCustomer`;
    return this.httpClient.get(path);
  }

  findCustomerByDateRange(customerId: number, startDate: any, endDate: any) {
    const path = `${this.apiBaseUrl}/order/listCustomerOrder/${customerId}/${startDate}/${endDate}`;
    return this.httpClient.get(path);
  }

}
