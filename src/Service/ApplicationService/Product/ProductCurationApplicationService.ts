/**
 * 제품을 추천해주는 서비스
 *
 * 유저개인화 api 추가된다면, 파라미터로 user.id를 전달해야할지?
 * 멤버변수로 User를 저장해야할지?
 */
class ProductCurationApplicationService {
  httpClient = fetch;

  baseUrl = 'http://localhost:3000/api/products';

  /**
   * 인기순 제품 조회
   */
  getProductsOrderByHit(order: 'desc' | 'asc' = 'desc') {
    return this.httpClient(`${this.baseUrl}/hit?order=${order}`, { method: 'GET' });
  }

  /**
   * 등록시간 최신순 제품 조회
   */
  getProductsOrderByRecent(order: 'desc' | 'asc' = 'desc') {
    return this.httpClient(`${this.baseUrl}/recent?order=${order}`, { method: 'GET' });
  }
}

export default ProductCurationApplicationService;
