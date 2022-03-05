import RegisterProductPayloadDTO from 'Service/ApplicationService/dto/RegisterProductPayloadDTO';

export const createProduct = (payload: RegisterProductPayloadDTO) => {
  return new Promise((resolve) => {
    console.log(payload);
    resolve(true);
  });
};
