import { Component } from '@angular/core';
import { Footer } from "../../layouts/shared/footer/footer";
import {CommonModule} from '@angular/common';
import { PhotoService } from '../../services/photoService';
import { ProductRelatedContent } from "../../layouts/product/product-related-content/product-related-content";
import { ProductDescribe } from "../../layouts/product/product-describe/product-describe";
import { ProductSocial } from "../../layouts/product/product-social/product-social";
import { ProductBenefits } from "../../layouts/product/product-benefits/product-benefits";
import { ProductImage } from "../../layouts/product/product-image/product-image";
import { ProductInfo } from "../../layouts/product/product-info/product-info";
import { ProductComment } from "../../layouts/product/product-comment/product-comment";
import { Navbar } from "../../layouts/shared/navbar/navbar";


@Component({
  selector: 'app-product',
  imports: [
    Footer,
    CommonModule,
    ProductRelatedContent,
    ProductDescribe,
    ProductSocial,
    ProductBenefits,
    ProductImage,
    ProductInfo,
    ProductComment,
    Navbar
],
  templateUrl: './product.html',
  styleUrl: './product.scss',
  providers: [PhotoService]
})
export class Product {
}
