import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit {
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
