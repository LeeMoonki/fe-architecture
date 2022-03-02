import { fetchBusinessUserProducts, registerProduct, updateProduct } from '../../../api/products';
import Product from '../../entity/Product';
import RegisteredProductDto from './dto/RegisteredProductsDto';

class ProductApplicationService {
  public registerProduct({
    name,
    price,
    discountAmount,
  }: {
    name: string;
    price: number;
    discountAmount: number;
  }) {
    return registerProduct({ name, price, discountAmount });
  }

  // api와 이름이 동일할 필요는 없습니다.
  // 도메인을 정의할 때 사용한 언어(Ubiquitous Language)를 사용합니다.
  public editProduct(product: Product) {
    return updateProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      discountAmount: product.discountAmount,
    });
  }

  /** 등록된 상품을 조회합니다. */
  public async fetchRegisteredProducts({
    businessUserId,
    page,
  }: {
    businessUserId: number;
    page: number;
  }) {
    const products = await fetchBusinessUserProducts({ businessUserId, page });

    return products.map((product) => new RegisteredProductDto(product));
  }
}

export default ProductApplicationService;
