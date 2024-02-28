import { Category } from './category';

export class Product {
  productId: number;
  productSku: string;
  productName: string;
  productPrice: number;
  productShortName: string;
  productDescription: string;
  createdDate: Date;
  deliveryTimeSpan: string;
  categoryId: Category;
  productImageUrl: string;
  categoryName: string;
  constructor() {
    this.productId = 0;
    this.categoryId = new Category();
    this.categoryId.categoryId = 0;
  }
}
