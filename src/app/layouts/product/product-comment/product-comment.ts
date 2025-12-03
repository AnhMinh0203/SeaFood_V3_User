import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SHARED_PRIMENG_MODULES } from '../../../core/shared/ui/shared-ui-imports';
@Component({
  selector: 'app-product-comment',
  imports: [
    FormsModule,
    SHARED_PRIMENG_MODULES
  ],
  templateUrl: './product-comment.html',
  styleUrl: './product-comment.scss',
})
export class ProductComment {
showReplyForm: boolean = false;
  currentReplyingTo = '';
  value2: any;


  toggleReplyForm(username: string) {
    this.currentReplyingTo = username;
    this.showReplyForm = !this.showReplyForm;
  }

  cancelReply() {
    this.showReplyForm = false;
  }

  submitReply() {
    console.log('Đã gửi trả lời cho', this.currentReplyingTo);
    this.showReplyForm = false;
  }
}
