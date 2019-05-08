import { State, Action, StateContext } from '@ngxs/store';
import { Product } from 'src/app/models';
import { ProductService } from 'src/app/services';
import { LoadProducts, AddProductToCart } from '../actions';

export interface ProductStateModel {
    cart: Product[];
    products: Product[];
}

@State<ProductStateModel>({
  name: 'product',
  defaults: {
    cart: [],
    products: []
  }
})
export class ProductState {
  constructor(
    private productService: ProductService
  ) {}

  @Action(LoadProducts)
  all(ctx: StateContext<ProductStateModel>) {
    const state = ctx.getState();
    this.productService.all()
      .subscribe(
        (data) => {
          ctx.setState({
            ...state,
            products: data.map(p => new Product(p)),
          });
        },
        (error) => {}
      ).add(() => {});
  }

  @Action(AddProductToCart)
  addProductToCart(ctx: StateContext<ProductStateModel>, action: AddProductToCart){
    const state = ctx.getState();
    ctx.setState({
      ...state,
      cart: [
        ...state.cart,
        action.product
      ]
    });
  }
}