import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { SHARED_PRIMENG_MODULES } from '../../../core/shared/ui/shared-ui-imports';
import { CurrencyPipe } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-submit-order-form',
  imports: [
    CardModule,
    CurrencyPipe,
    DialogModule,
    CommonModule,
    InputTextModule,
    FloatLabel,
    SHARED_PRIMENG_MODULES
  ],
  providers: [MessageService],
  templateUrl: './submit-order-form.html',
  styleUrl: './submit-order-form.scss',
})
export class SubmitOrderForm {
  @Input() visible = false;
  @Input() orderData: any;
  @Output() visibleChange = new EventEmitter();
  @Output() onHide = new EventEmitter();

  today = new Date();
  value3: any;
  // Thông tin giao hàng
  shippingInfo = {
    name: '',
    phone: '',
    address: '',
    note: ''
  };

  constructor(private messageService: MessageService) { }

  resetForm() {
    this.shippingInfo = {
      name: '',
      phone: '',
      address: '',
      note: ''
    };
  }

  onSubmit() {
    const order = {
      ...this.orderData,
      shippingInfo: this.shippingInfo,
      orderDate: new Date().toISOString(),
      status: 'pending'
    };

    console.log('Đơn hàng đã được xác nhận', order);
    this.onHide.emit();
    this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: 'Đơn hàng đã được xác nhận' });
  }

  onDialogHide() {
    this.visibleChange.emit(false);
    this.onHide.emit();
  }
}
