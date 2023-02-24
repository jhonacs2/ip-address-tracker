import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { ComponetsModule } from '../components/componets.module';



@NgModule({
    declarations: [
        MainPageComponent
    ],
    exports: [
        MainPageComponent
    ],
  imports: [
    CommonModule,
    ComponetsModule
  ]
})
export class PagesModule { }
