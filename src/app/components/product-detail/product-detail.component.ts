import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { SearchProductsService } from 'src/app/services/search-products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  productId: string = '';
  product: Product = null;

  constructor(private searchProductService: SearchProductsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
          this.productId = params['id'];
          this.getProductbyId();
      }
    );
  }


  getProductbyId() {

    this.searchProductService.getProductByid(this.productId).then(res => {

      debugger;
      this.product = res.item;

    });


  }

}
