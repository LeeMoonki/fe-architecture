/**
 * 제품을 검색하기 위한 서비스
 */
class ProductSearchApplicationService {
  httpClient = fetch;

  baseUrl = 'http://localhost:3000/api/products';

  /**
   * 키워드 기반 제품 검색
   */
  findProductByKeyword(keyword: string) {
    return this.httpClient(`${this.baseUrl}/search?keyword=${keyword}`, { method: 'GET' });
  }
}

export default ProductSearchApplicationService;
