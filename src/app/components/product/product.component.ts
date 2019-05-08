import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models';
import { Store } from '@ngxs/store';
import { AddProductToCart } from 'src/app/store/actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
  }

  addToCart() {
    this.store.dispatch(new AddProductToCart(this.product));
  }

}
