import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-body',
   standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {
  products = [
    { id: 1, name: 'Cua Ghẹ', description: 'Cua ghẹ tươi sống' },
    { id: 2, name: 'Tôm Hùm', description: 'Tôm hùm Alaska' },
    { id: 3, name: 'Cá Ngừ', description: 'Cá ngừ đại dương' }
  ];


  constructor(private router: Router) { }

  onClickProduct(productID: any) {
    this.router.navigate(['/product', productID]);
  }
}
