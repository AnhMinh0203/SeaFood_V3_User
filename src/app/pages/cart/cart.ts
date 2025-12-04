import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Navbar } from "../../layouts/shared/navbar/navbar";

import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SHARED_PRIMENG_MODULES } from '../../core/shared/ui/shared-ui-imports';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { Product } from '../../core/entities/product';
import { ProductService } from '../../services/productService';
import { CurrencyPipe } from '@angular/common';
import { SubmitOrderForm } from "../../layouts/cart/submit-order-form/submit-order-form";

@Component({
  selector: 'app-cart',
  imports: [
    Navbar,
    SHARED_PRIMENG_MODULES,
    TableModule,
    RatingModule,
    FormsModule,
    TagModule,
    CurrencyPipe,
    SubmitOrderForm,
    CommonModule
  ],
  providers: [ProductService],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  @Output() onHide = new EventEmitter();
  products: Product[] = [];
  showOrderForm = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
  }

  decrementQuantity(product: Product) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  incrementQuantity(product: Product) {
    product.quantity++;
  }

  validateQuantity(product: Product) {
    if (product.quantity < 1 || isNaN(product.quantity)) {
      product.quantity = 1;
    }
  }

  calculateTotal(product: Product): number {
    return product.price * product.quantity;
  }

  calculateGrandTotal(): number {
    return this.products.reduce((total, product) =>
      total + (product.price * product.quantity), 0);
  }

  removeProduct(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
  }

  openOrderConfirmation() {
    if (!this.products || this.products.length === 0) {
      alert('Giỏ hàng trống!');
      return;
    }
    this.showOrderForm = true;
  }

  closeOrderConfirmation() {
    this.showOrderForm = false;
  }
}
