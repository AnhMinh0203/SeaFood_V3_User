import { Component } from '@angular/core';
import { Banner } from "../../layouts/banner/banner";
import { Navbar } from "../../layouts/navbar/navbar";
import { Body } from "../../layouts/body/body";

@Component({
  selector: 'app-home',
  imports: [Banner, Navbar, Body],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
