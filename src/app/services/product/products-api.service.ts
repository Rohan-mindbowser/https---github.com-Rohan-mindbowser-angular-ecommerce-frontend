import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  constructor(private http: HttpClient) {}

  //Get all Products
  getAllProducts(): Observable<any> {
    return this.http.get(`${baseUrl}/api/products/allproducts`);
  }

  //Get single Product by id
  singleProduct(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/api/products/singleproduct?id=${id}`);
  }

  //Get product by category
  getProductByCategory(cat: any): Observable<any> {
    return this.http.get(
      `${baseUrl}/api/products/productbycategory?cat=${cat}`
    );
  }
}
