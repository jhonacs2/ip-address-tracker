import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItSearchComponent } from './it-search/it-search.component';
import { ItMapComponent } from './it-map/it-map.component';


@NgModule({
  declarations: [
    ItSearchComponent,
    ItMapComponent
  ],
  exports: [
    ItSearchComponent,
    ItMapComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponetsModule {
}
