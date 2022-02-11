import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ResultsViewComponent } from './components/results-view/results-view.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

const routes: Routes = [
  // {path: '', component: SearchBoxComponent},
  {path: 'items?search/:query', component: ResultsViewComponent},
  {path: 'items/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
