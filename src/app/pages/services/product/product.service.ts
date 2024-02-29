import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants';
import { Observable } from 'rxjs';
import { Category } from '../../admin/models/category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(
      Constants.API_END_POINT + Constants.METHODS.GET_ALL_PRODUCTS
    );
  }
  getAllCategory() {
    return this.http.get(
      Constants.API_END_POINT + Constants.METHODS.GET_ALL_CATOGRY
    );
  }
  saveProduct(obj: any) {
    return this.http.post(
      Constants.API_END_POINT + Constants.METHODS.GET_ALL_PRODUCTS,
      obj
    );
  }
  updateProduct(obj: any) {
    return this.http.put(
      Constants.API_END_POINT + Constants.METHODS.GET_ALL_PRODUCTS,
      obj
    );
  }

  deleteProduct(obj: any) {
    return this.http.post(
      Constants.API_END_POINT + Constants.METHODS.GET_ALL_PRODUCTS + '/delete',
      obj
    );
  }
  // getAllCategory2(bookId: Category): Observable<Category[]> {
  //   return this.http.get<Category[]>(
  //     `${Constants.API_END_POINT + Constants.METHODS.GET_ALL_CATOGRY}`
  //   );
  // }
}
