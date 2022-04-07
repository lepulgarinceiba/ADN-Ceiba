import { Injectable } from "@angular/core";
import { HttpService } from "@core/services/http.service";
import { Product } from "@shared/interfaces/products-interface";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ShoppingHistoryService {
  URL_API: string = `${environment.endpoint}`;

  constructor(protected http: HttpService) {}

  /**
   * this method is used to get all shopping history
   * @returns Observable<Product[]>
   */
  public getShoppingHistory(): Observable<Product[]> {
    return this.http.doGet<Product[]>(
      `${this.URL_API}shopping-history`,
      this.http.optsName("consultar historial de compras")
    );
  }
}
