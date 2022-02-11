import { Author } from "../general/author.model";
import { Product } from "../product/product.model";

export class ProductResponse {
  author: Author;
  categories: string[] = [];
  item: Product;
}
