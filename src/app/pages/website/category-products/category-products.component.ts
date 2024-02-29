import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css',
})
export class CategoryProductsComponent implements OnInit {
  productList: any[] = [];
  activatedCategory: number = 0;
  ngOnInit(): void {}
  constructor(
    private prodService: ProductService,
    private toastr: ToastrService,
    private aroute: ActivatedRoute
  ) {
    this.aroute.params.subscribe((res: any) => {
      this.activatedCategory = res.id;
      this.getAllProductsByCategoryId();
      debugger;
    });
  }
  getAllProductsByCategoryId() {
    this.prodService
      .getAllProductsByCategoryId(this.activatedCategory)
      .subscribe((res: any) => {
        debugger;

        this.productList = res;
      });
  }
}
