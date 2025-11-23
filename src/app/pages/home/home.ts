import { Component } from '@angular/core';
import { Banner } from "../../layouts/banner/banner";
import { Navbar } from "../../layouts/navbar/navbar";

@Component({
  selector: 'app-home',
  imports: [Banner, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
