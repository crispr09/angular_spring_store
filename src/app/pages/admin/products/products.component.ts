import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
// import * as productsJson from './../../../products.json';
// import * as categoryJson from './../../../categories.json';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';
import { Category } from '../../admin/models/category';
import { Product } from '../../admin/models/product';
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule,
} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,

    // required animations module
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  // json: any;
  categoryList: any[] = [];
  productList: any[] = [];
  categoryList2: any[] = [];
  category_json: any;
  cat: Category = new Category();
  prod: Product = new Product();
  // productObj: any = {
  //   productId: 690,
  //   productSku: 'Winkies',
  //   productName: 'Winkies Layer Cake - Chocolate',
  //   productPrice: 5.0,
  //   productShortName: 'Winkies Layer Cake - Chocolate',
  //   productDescription: 'Winkies Layer Cake - Chocolate, 15 g',
  //   createdDate: new Date(),
  //   deliveryTimeSpan: '1day',
  //   categoryId: 69,
  //   productImageUrl:
  //     'https://www.bigbasket.com/media/uploads/p/l/40018011_4-winkies-layer-cake-chocolate.jpg',
  //   categoryName: 'Cakes & Pastries',
  // };
  constructor(
    private prodService: ProductService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    // this.json = productsJson;
    // this.category_json = categoryJson;
    this.getAllCategory();
    this.getAllProducts();

    console.log('categoryList ', this.categoryList);
    console.log('productList ', this.productList);
  }
  isProductPanelVisible = false;

  onCloseClick() {
    this.isProductPanelVisible = false;
  }
  onNewClick() {
    this.isProductPanelVisible = true;
  }
  getAllCategory() {
    this.prodService.getAllCategory().subscribe((res: any) => {
      this.categoryList = res;
    });
  }
  getAllProducts() {
    this.prodService.getAllProducts().subscribe((res: any) => {
      this.productList = res;
    });
  }

  onCreateProduct() {
    this.prodService.saveProduct(this.prod).subscribe((res: any) => {
      this.getAllProducts();
    });
    //
  }
  onEditClick(product: any) {
    this.prod = product;
    this.onNewClick();
  }
  onResetClick(id: any) {
    this.prod = new Product();
  }

  onUpdateProduct(product: any) {
    this.prodService.saveProduct(this.prod).subscribe((product: any) => {
      this.getAllProducts();
    });
  }
  onDeleteProduct(productId: any) {
    const isDelete = confirm('Are you Sure want to delete?');
    if (isDelete) {
      this.prodService.deleteProduct(productId).subscribe((result: any) => {
        if (result) {
          this.toastr.success('Product Deleted Successfully');
          this.getAllProducts();
        } else {
          // this.toastr.error('Product Not Deleted');
        }
      });
      //this.getAllProducts();
    }
  }
}
