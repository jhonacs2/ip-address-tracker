import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItSearchComponent } from './it-search/it-search.component';



@NgModule({
    declarations: [
        ItSearchComponent
    ],
    exports: [
        ItSearchComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ComponetsModule { }
