import EditProductPayloadDTO from 'Service/ApplicationService/dto/EditProductPayloadDTO';
import RegisterProductPayloadDTO from 'Service/ApplicationService/dto/RegisterProductPayloadDTO';
import FindProductsPayloadDTO from 'Service/ApplicationService/dto/FindProductsPayloadDTO';

export const createProduct = (payload: RegisterProductPayloadDTO) => {
  return new Promise((resolve) => {
    console.log(payload);
    resolve(true);
  });
};

export const editProduct = (payload: EditProductPayloadDTO) => {
  return new Promise((resolve) => {
    console.log(payload);
    resolve(true);
  });
};

export const findProductsBy = (payload: FindProductsPayloadDTO) => {
  return new Promise((resolve) => {
    console.log(payload);
    resolve(true);
  });
};
