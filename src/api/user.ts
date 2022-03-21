import SignupB2BUserPayloadDTO from 'Service/ApplicationService/dto/SignupB2BUserPayloadDTO';
import SignupUserPayloadDTO from '../Service/ApplicationService/dto/SignupUserPayloadDTO';

export const createUser = (payload: SignupUserPayloadDTO) => {
  return new Promise((resolve) => {
    console.log(payload);
    resolve(true);
  });
};

export const createB2BUser = (payload: SignupB2BUserPayloadDTO) => {
  return new Promise((resolve) => {
    console.log(payload);
    resolve(true);
  });
};
