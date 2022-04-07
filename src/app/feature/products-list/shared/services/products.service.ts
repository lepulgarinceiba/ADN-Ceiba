import { Injectable } from "@angular/core";
import { HttpService } from "@core/services/http.service";
import { Product } from "@shared/interfaces/products-interface";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  URL_API: string = `${environment.endpoint}`;

  constructor(protected http: HttpService) {}

  /**
   * this method is used to get all products
   * @returns Observable<Product[]>
   */
  public getProducts(): Observable<Product[]> {
    return this.http.doGet<Product[]>(
      `${this.URL_API}products`,
      this.http.optsName("consultar productos")
    );
  }
}
