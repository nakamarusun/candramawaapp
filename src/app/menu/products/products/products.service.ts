import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Payload, PayloadStatus } from 'src/app/common/payload';
import { environment } from 'src/environments/environment';

export interface Products {
  name: string;
  price: number;
  rating?: number;
  image: string;
}

// Urls
const productUrl = `${environment.baseUrl}/products`;

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsSubject: BehaviorSubject<Payload<Products[]>>;

  constructor(private http: HttpClient) {
    this.productsSubject = new BehaviorSubject<Payload<Products[]>>({
      data: [],
      status: PayloadStatus.IDLE,
    });
  }

  getProducts() {
    // TODO: May be smarter? Not just reset data each time? Idk
    // Sets the current status to getting, so we can display spinners or something
    this.productsSubject.next({
      status: PayloadStatus.GETTING,
      data: [],
    });

    // Start async request
    this.http.get<Products[]>(productUrl).subscribe((data) => {
      this.productsSubject.next({
        status: PayloadStatus.SUCCESS,
        data,
      });
    });
  }

  get getProducts$(): Observable<Payload<Products[]>> {
    return this.productsSubject.asObservable();
  }
}
