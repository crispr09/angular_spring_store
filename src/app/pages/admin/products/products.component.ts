import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as productsJson from './../../../products.json';
import * as categoryJson from './../../../categories.json';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  json: any;
  category_json: any;
  ngOnInit(): void {
    this.json = productsJson;
    this.category_json = categoryJson;
    // console.log('Data', this.json.data);
    console.log('Data', this.category_json.data);
  }
  isProductPanelVisible = false;

  onCloseClick() {
    this.isProductPanelVisible = false;
  }
  onNewClick() {
    this.isProductPanelVisible = true;
  }
}
