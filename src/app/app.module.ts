import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchProductsService } from './services/search-products.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchBoxModule } from './modules/search-box/search-box.module';
import { FormsModule } from '@angular/forms';
import { ResultsViewModule } from './modules/results-view/results-view.module';
import { ProductDetailsModule } from './modules/product-details/product-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SearchBoxModule,
    ResultsViewModule,
    ProductDetailsModule
  ],
  providers: [SearchProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
