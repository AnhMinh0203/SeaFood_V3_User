import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { SHARED_PRIMENG_MODULES } from '../../../core/shared/ui/shared-ui-imports';
import { Product } from '../../../core/entities/product';
@Component({
  selector: 'app-product-info',
  imports: [
    TagModule,
    FormsModule,
    SHARED_PRIMENG_MODULES
  ],
  templateUrl: './product-info.html',
  styleUrl: './product-info.scss',
})
export class ProductInfo {
  @Output() order = new EventEmitter<void>();
  @Input() product: Product = {} as Product
  value1: any;
  selectedUnitOption: string = '';

  selectUnitOption(option: string) {
    this.selectedUnitOption = option;
  }

  onOrderClick() {
    this.order.emit();
  }

  decrementQuantity(product: any) {

  }

  validateQuantity(product: any) {

  }

  incrementQuantity(product: any) {

  }
}
