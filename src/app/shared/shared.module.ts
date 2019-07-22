import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniLoaderComponent } from './mini-loader/mini-loader.component';

@NgModule({
  declarations: [ MiniLoaderComponent ],
  imports: [
    CommonModule
  ],
  exports: [ MiniLoaderComponent ]
})
export class SharedModule { }
