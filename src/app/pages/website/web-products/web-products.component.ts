import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-web-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css',
})
export class WebProductsComponent implements OnInit {
  productList: any[] = [];
  ngOnInit(): void {
    debugger;
    this.getAllProducts();
  }
  constructor(
    private prodService: ProductService,
    private toastr: ToastrService
  ) {}
  getAllProducts() {
    debugger;
    this.prodService.getAllProducts().subscribe((res: any) => {
      this.productList = res;
    });
  }
}
