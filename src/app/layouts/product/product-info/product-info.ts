import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { SHARED_PRIMENG_MODULES } from '../../../core/shared/ui/shared-ui-imports';
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
  value1: any;
  selectedUnitOption: string = '';
  
  selectUnitOption(option:string){
    this.selectedUnitOption = option;
  }
}
