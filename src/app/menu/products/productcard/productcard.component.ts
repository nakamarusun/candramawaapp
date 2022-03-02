import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../products/products.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
})
export class ProductcardComponent implements OnInit {
  @Input() product: Products = {
    name: '',
    image: '',
    price: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
