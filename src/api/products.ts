export const registerProduct = ({
  name,
  price,
  discountAmount,
}: {
  name: string;
  price: number;
  discountAmount: number;
}) => {
  name;
  price;
  discountAmount;
  return Promise.resolve(true);
};

export const updateProduct = ({
  id,
  name,
  price,
  discountAmount,
}: {
  id: number;
  name?: string;
  price?: number;
  discountAmount?: number;
}) => {
  id;
  name;
  price;
  discountAmount;

  // updatedAt을 여기에서 설정해주거나 합니다.

  return Promise.resolve(true);
};

export const fetchBusinessUserProducts = ({
  businessUserId,
  page,
}: {
  businessUserId: number;
  page: number;
}) => {
  businessUserId;
  page;

  return Promise.resolve([
    {
      id: 1,
      name: '상품1',
      price: 100,
      discountAmount: 10,
      totalSalesAmount: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: '상품2',
      price: 200,
      discountAmount: 100,
      totalSalesAmount: 2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 3,
      name: '상품3',
      price: 1000,
      discountAmount: 0,
      totalSalesAmount: 10,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);
};
