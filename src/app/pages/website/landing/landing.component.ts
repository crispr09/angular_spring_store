import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product/product.service';
import { Router, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit {
  navigateToProducts(id: number) {
    this.router.navigate(['/product', id]);
  }
  categoryList: any[] = [];

  constructor(private prodService: ProductService, private router: Router) {
    this.prodService.getAllCategory().subscribe((res: any) => {
      this.categoryList = res;
    });
  }
  ngOnInit(): void {}
}
