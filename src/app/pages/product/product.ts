import { Component } from '@angular/core';
import { Navbar } from "../../layouts/navbar/navbar";
import { Banner } from "../../layouts/banner/banner";
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from '../../services/photoService';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputNumberModule } from 'primeng/inputnumber';

import { InputTextModule } from 'primeng/inputtext';

import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-product',
  imports: [
    Navbar, 
    Banner, 
    GalleriaModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    FormsModule, InputGroup, InputGroupAddonModule, ButtonModule, MenuModule,InputTextModule,
    InputNumberModule
  ],
  templateUrl: './product.html',
  styleUrl: './product.scss',
  providers: [PhotoService]
})
export class Product {
  value1: any;
  images: any[] = [];
  responsiveOptions: any[] = [
    {
      breakpoint: '1300px',
      numVisible: 4
    },
    {
      breakpoint: '575px',
      numVisible: 3
    }
  ];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getImages().then((images) => this.images = images);
  }
}
