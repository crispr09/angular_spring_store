import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  productList: any[] = [];
  ngOnInit(): void {
    this.getAllProducts();
  }
  constructor(
    private prodService: ProductService,
    private toastr: ToastrService
  ) {}
  getAllProducts() {
    this.prodService.getAllProducts().subscribe((res: any) => {
      this.productList = res;
    });
  }
}
