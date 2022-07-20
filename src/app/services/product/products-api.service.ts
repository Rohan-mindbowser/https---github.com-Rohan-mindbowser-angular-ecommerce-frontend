import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any>{
    return this.http.get(`${baseUrl}/api/products/allproducts`);
  }
}
