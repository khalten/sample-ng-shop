import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models';
import { ProductState } from 'src/app/store/states';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  @Select(ProductState) state$: Observable<any>;

  constructor() {
    this.loadProducts();
  }

  ngOnInit() {
  }

  loadProducts() {
    this.state$.subscribe(
      (data) => this.products = data.products
    );
  }

}
