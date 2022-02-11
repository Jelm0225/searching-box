import { Injectable } from '@angular/core';
import { Product } from '../models/product/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsResponse } from '../models/api/products-response.model';
import { ProductResponse } from '../models/api/product-response.model';


@Injectable({
  providedIn: 'root'
})
export class SearchProductsService {

  private urlSearchProductsApi: string = 'https://api.mercadolibre.com/sites/MLA/search?q=';
  private urlGetProductApi: string = 'https://api.mercadolibre.com/items/:id';
  private urlGetProductDescriptionApi: string = 'https://api.mercadolibre.com/items/:id/description';
  private authorName:string = 'John Esteban'
  private authorLastName:string = 'Londoño Mesa'

  private productsResponse: ProductsResponse = {
    author: {
      name: '',
      lastname: ''
    },
    categories: [],
    items: []
  }

  private productResponse: ProductResponse = {
    author: {
      name: '',
      lastname: ''
    },
    categories: [],
    item: {
      id: '',
      title: '',
      price: {
        currency: 'string',
        amount: 0,
        decimals: 0
      },
      address: {
        stateId: '',
        stateName: '',
        cityId: '',
        cityName: ''
      },
      picture: '',
      condition: '',
      free_shipping: false,
      sold_quantity: 0,
      description: ''
    }
  }


  constructor(private http: HttpClient) { }

    getProducts(filterValue: string): Promise<ProductsResponse> {

      return new Promise((resolve) => {


        this.http.get<any>(`${this.urlSearchProductsApi}+${filterValue}`)
        .subscribe(products => {

          let filterCategory = products.available_filters.find(f=> f.id === 'category');
          let mostResultsCategory = null;

          this.productsResponse.author.name = this.authorName;
          this.productsResponse.author.lastname = this.authorLastName;

          this.productsResponse.items = this.mapProductsResult(products.results);

          if(filterCategory) {

            this.productsResponse.categories = filterCategory.values.map((category: any) => {
              return category.name;
            });

            mostResultsCategory = this.getMostResultsCategory(filterCategory.values);
            this.productsResponse.items = this.mapProductsResult(products.results.filter(o => o.category_id !== mostResultsCategory.id));
          }

          resolve(this.productsResponse);

        });

      });
    }

    getProductByid(id: string): Promise<ProductResponse> {

      return new Promise((resolve) => {



        this.http.get<any>(this.urlGetProductApi.replace(':id', id))
        .subscribe(product => {

debugger;

          this.productResponse.author.name = this.authorName;
          this.productResponse.author.lastname = this.authorLastName;
          this.productResponse.item = this.mapProductResult(product);

          this.http.get<any>(this.urlGetProductDescriptionApi.replace(':id', id))
          .subscribe(description => {

            this.productResponse.item.description = description.plain_text;

            resolve(this.productResponse);

          });

        });

      });
    }

    private getMostResultsCategory(categories:  any): any {

      let categoryValues: number[]= [];

      for(let category of categories){
        categoryValues.push(category.results);
      }

      categoryValues.sort(function(a ,b) { return a - b}).reverse();

      let mostResultsNumber = categoryValues[0]

      let mostResultsCategory = categories.find((o: any) => o.results === mostResultsNumber);

      return mostResultsCategory;
    }

    private mapProductsResult(results: any): Product[] {

      return results.map((result: any) => {
        let product = {
          id: result.id,
          title: result.title,
          price: {
            currency: result.currency_id,
            amount: result.price,
            decimals: 0,
          },
          address: {
            stateId: result.address.state_id,
            stateName: result.address.state_name,
            cityId: result.address.city_id,
            cityName: result.address.city_name
          },
          picture: result.thumbnail,
          condition: result.condition,
          free_shipping: result.shipping.free_shipping
        }

        return product;
      }) || [];

    }

    private mapProductResult(results: any): Product {

      let product = {
        id: results.id,
        title: results.title,
        price: {
          currency: results.currency_id,
          amount: results.price,
          decimals: 0,
        },
        address: null,
        picture: results.thumbnail,
        condition: results.condition,
        free_shipping: results.shipping.free_shipping,
        sold_quantity: results.sold_quantity,
        description: ''
      };

      return product;

    }


}
