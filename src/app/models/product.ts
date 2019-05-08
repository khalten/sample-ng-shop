import { ModelInterface } from './model.interface';
import { Config } from '../app.configs';

export class Product implements ModelInterface{
    name: string;
    price: number;
    img: string;

    /**
     * Class constructor
     * @param  {any = null} attrs
     */
    constructor(attrs: any = null) {
        if (attrs) {
            this.build(attrs);
        }
    }

    /**
     * Build the object attributes
     * @param {any} attrs
     */
    build(attrs: any): void {
        this.name = attrs.name;
        this.price = attrs.price;
        this.img = Config.apiProductImageUrl + attrs.img;
    }

    /**
     * Return a JSON object representation of the object
     * @return {Object}
     */
    toJson(): Object {
        return {
            name: this.name,
            price: this.price,
            img: this.img,
        };
    }
}