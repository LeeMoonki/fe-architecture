import { stringify } from 'query-string';
import Product from '../Domain/Product';

export type Query = {
  pageNumber: number;
  pageSize: number;
  keyword?: string;
  order?: string;
};

export default class ProductService {
  public getSearchedProducts(query: Query) {
    return console.log(stringify(query));
  }

  public getPurchasedProducts(query: Query) {
    return console.log(stringify(query));
  }

  public getSellingProducts(query: Query) {
    return console.log(stringify(query));
  }

  public postProduct(product: Product) {
    return console.log(product);
  }

  public updateProduct(product: Product) {
    return console.log(product);
  }
}
