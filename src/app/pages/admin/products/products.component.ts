import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as productsJson from './../../../products.json';
import * as categoryJson from './../../../categories.json';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  json: any;
  category_json: any;

  productObj: any = {
    productId: 690,
    productSku: 'Winkies',
    productName: 'Winkies Layer Cake - Chocolate',
    productPrice: 5.0,
    productShortName: 'Winkies Layer Cake - Chocolate',
    productDescription: 'Winkies Layer Cake - Chocolate, 15 g',
    createdDate: new Date(),
    deliveryTimeSpan: '1day',
    categoryId: 69,
    productImageUrl:
      'https://www.bigbasket.com/media/uploads/p/l/40018011_4-winkies-layer-cake-chocolate.jpg',
    categoryName: 'Cakes & Pastries',
  };
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
