import { Component } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categoryList: any[] = [];
  products$: Observable<any>;
  constructor(private prodService: ProductService) {
    this.products$ = this.prodService.getAllCategory();
  }
}
