import { Author } from "../general/author.model";
import { Product } from "../product/product.model";

export class ProductsResponse {
  author: Author;
  categories: string[] = [];
  items: Product[] = [];

  constructor() {

  }
}
