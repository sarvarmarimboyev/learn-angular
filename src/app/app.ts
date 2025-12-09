import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList],  // <-- add here
  styleUrls: ['./app.css'],
  templateUrl: './app.html',
})
export class App {}
