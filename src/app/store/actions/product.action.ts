import { Product } from 'src/app/models';

export class LoadProducts {
    static readonly type = '[Product] LoadProducts';
    constructor() {}
}

export class AddProductToCart {
    static readonly type = '[Product] AddProductToCart';
    constructor(public product: Product) {}
}