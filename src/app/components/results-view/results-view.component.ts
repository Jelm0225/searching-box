import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { SearchProductsService } from 'src/app/services/search-products.service';

@Component({
  selector: 'app-results-view',
  templateUrl: './results-view.component.html',
  styleUrls: ['./results-view.component.css']
})
export class ResultsViewComponent implements OnInit {

  productList: Product[] = [];
  query: string = '';

  constructor(private searchProductService: SearchProductsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
          this.query = params['query'];
          this.getProductsbySearchBox();
      }
    );
  }

  getProductsbySearchBox() {

    this.searchProductService.getProducts(this.query).then(res => {

      this.productList = res.items;

    });

  }

}
