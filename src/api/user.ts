import SignupUserPayloadDTO from '../Service/ApplicationService/dto/SignupUserPayloadDTO';

export const createUser = (payload: SignupUserPayloadDTO) => {
  return new Promise((resolve) => {
    console.log(payload);
    resolve(true);
  });
};

// export const createB2BUser = (payload: EditProductPayloadDTO) => {
//   return new Promise((resolve) => {
//     console.log(payload);
//     resolve(true);
//   });
// };
