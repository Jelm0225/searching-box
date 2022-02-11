import { Address } from "../general/address.model";
import { Price } from "./price.model";

export class Product {
  id: string;
  title: string;
  price: Price;
  address: Address;
  picture: string;
  condition: string;
  free_shipping: Boolean;
  sold_quantity: number;
  description: string;
}
