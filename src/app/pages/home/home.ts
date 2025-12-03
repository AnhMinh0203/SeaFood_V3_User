import { Component } from '@angular/core';
import { Banner } from "../../layouts/home/banner/banner";
import { Navbar } from "../../layouts/shared/navbar/navbar";
import { Footer } from "../../layouts/shared/footer/footer";
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-home',
  imports: [Banner, Navbar, Footer, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
