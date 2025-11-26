import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-body',
  imports: [
    RouterLink, RouterOutlet
  ],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {

}
