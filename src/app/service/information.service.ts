import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { endPoints } from '../config/endpoint.enum';
import { environment } from 'src/environments/environment';
import { product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(environment.apiUrl+endPoints.GET_PRODUCTS);
  }

  postProducts(products:product){
    return this.http.post(environment.apiUrl+endPoints.POST_PRODUCTS,products);
  }

  verificationProducts(product:string){
    return this.http.get(environment.apiUrl+endPoints.VERIFICATION_PRODUCTS+'?id='+product);
  }

  deleteProduct(product:string){
    return this.http.delete(environment.apiUrl+endPoints.DELETE_PRODUCT+'?id='+product);
  }

}
