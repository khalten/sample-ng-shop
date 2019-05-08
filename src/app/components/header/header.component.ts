import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductState } from 'src/app/store/states';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Select(ProductState) state$: Observable<any>;
  cartTotal = 0;

  constructor() {
    this.loadCartTotal();
  }

  ngOnInit() {
  }

  loadCartTotal() {
    this.state$.subscribe(
      (data) => this.cartTotal = data.cart.length
    );
  }

}
