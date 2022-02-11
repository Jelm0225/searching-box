import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from 'src/app/components/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [ProductDetailComponent]
})
export class ProductDetailsModule { }
