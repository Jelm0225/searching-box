import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResultsViewComponent } from 'src/app/components/results-view/results-view.component';



@NgModule({
  declarations: [ResultsViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [ResultsViewComponent]
})
export class ResultsViewModule { }
