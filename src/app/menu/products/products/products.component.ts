import { Component, OnInit } from '@angular/core';
import { PayloadStatus } from 'src/app/common/payload';
import { Products, ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];

  constructor(private productSvc: ProductsService) {
    this.productSvc.getProducts$.subscribe((x) => {
      switch (x.status) {
        case PayloadStatus.GETTING: {
          // TODO: Display spinner
          break;
        }
        case PayloadStatus.SUCCESS: {
          this.products = x.data;
          break;
        }
        default: {
        }
      }
    });
  }

  ngOnInit(): void {
    // Load Products from API
    this.productSvc.getProducts();
  }
}
