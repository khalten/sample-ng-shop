import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { HomeComponent } from './views/home/home.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [ShopComponent, HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
