import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  /**
   * * @input productList - the Product[] passed to us
   * */
  @Input() productList: Product[];
  /**
   * * @output onProductSelected - outputs the current
   * * Product whenever a new Product is selected
   * */
  @Output() onProductSelected: EventEmitter<Product> = new EventEmitter();
  private currentProduct: Product;

  constructor() { 
    console.log(this.productList)
  }

  ngOnInit(): void {
    // this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}
