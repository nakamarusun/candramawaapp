import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Payload,
  PayloadStatus,
  SearchObservable,
  SearchSource,
  SearchStruct,
} from 'src/app/common/payload';
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
export class ProductsService implements SearchSource {
  searchSectionName = 'Products';
  private productsSubject: BehaviorSubject<Payload<Products[]>>;
  private searchSubject: BehaviorSubject<SearchStruct[]>;

  constructor(private http: HttpClient) {
    this.productsSubject = new BehaviorSubject<Payload<Products[]>>({
      data: [],
      status: PayloadStatus.IDLE,
    });

    this.searchSubject = new BehaviorSubject<SearchStruct[]>([]);
  }

  /**
   * Starts an async request to get all the products. Will update the observable
   */
  getProducts() {
    // TODO: May be smarter? Not just reset data each time? Idk
    // TODO: Maybe only query every how many seconds
    // Sets the current status to getting, so we can display spinners or something
    this.productsSubject.next({
      status: PayloadStatus.GETTING,
      data: [],
    });

    // Start async request
    this.http.get<Products[]>(productUrl).subscribe((data) => {
      // Populate products
      this.productsSubject.next({
        status: PayloadStatus.SUCCESS,
        data,
      });

      // Populate search
      this.searchSubject.next(
        data.map(({ name }) => {
          return {
            name,
            url: '#',
          };
        })
      );
    });
  }

  get getProducts$(): Observable<Payload<Products[]>> {
    return this.productsSubject.asObservable();
  }

  get getSearch$(): SearchObservable {
    return this.searchSubject.asObservable();
  }
}
