import { Component } from '@angular/core';
import { SHARED_PRIMENG_MODULES } from '../../../core/shared/ui/shared-ui-imports';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [
    SHARED_PRIMENG_MODULES,
    BadgeModule,
    OverlayBadgeModule,
    RouterModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  constructor(private router: Router) { }

  onClickCart() {
    this.router.navigate(['cart']);
  }

  onClickNews() {
    this.router.navigate(['news']);
  }
}
