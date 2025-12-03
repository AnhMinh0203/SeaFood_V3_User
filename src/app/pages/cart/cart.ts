import { Component } from '@angular/core';
import { Navbar } from "../../layouts/shared/navbar/navbar";


import { TableModule } from 'primeng/table';
import { SHARED_PRIMENG_MODULES } from '../../core/shared/ui/shared-ui-imports';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { Product } from '../../core/entities/product/product';
import { ProductService } from '../../services/productService';
import { CurrencyPipe, DecimalPipe } from '@angular/common'; 

@Component({
  selector: 'app-cart',
  imports: [
    Navbar,
    SHARED_PRIMENG_MODULES,
    TableModule,
    RatingModule,
    FormsModule,
    TagModule,
    CurrencyPipe, DecimalPipe
  ],
  providers: [ProductService],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  products!: Product[];

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

  // Tăng số lượng
  incrementQuantity(product: Product) {
    product.quantity++;
  }

  // Kiểm tra giá trị hợp lệ
  validateQuantity(product: Product) {
    if (product.quantity < 1 || isNaN(product.quantity)) {
      product.quantity = 1;
    }
  }

  // Tính tổng tiền cho từng sản phẩm
  calculateTotal(product: Product): number {
    return product.price * product.quantity;
  }

  // Tính tổng tiền toàn bộ giỏ hàng
  calculateGrandTotal(): number {
    return this.products.reduce((total, product) => 
      total + (product.price * product.quantity), 0);
  }

  // Xóa sản phẩm khỏi giỏ hàng
  removeProduct(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
  }
}
