import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, FooterComponent, ProductComponent
  ]
})
export class ComponentsModule { }
