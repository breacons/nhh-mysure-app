// import api from '@/service/network/api';
// import authorizedApi from '@/service/network/authorized-api';
import {
  API_ERROR_INVALID_CREDENTIALS,
  API_ERROR_USER_NOT_FOUND,
  API_ERROR_USER_ALREADY_ACTIVATED,
  API_ERROR_USER_INACTIVE,
  API_ERROR_USER_EMAIL_IN_USE,
} from '../constans/api-error';

import {
  delayedFailure, delayedSuccess, authorizedApi,
} from './api';
// import { type SessionDTO, type MeDTO, type AccountActivationDTO } from '@/model/dto';


export const logInWithEmail = (email, password) => {
  // return api.post(`/auth/sign-in`, { email, password });
  if (email.indexOf('fail.com') >= 0) return delayedFailure(`${email}-${password}`, 1000);
  if (email.indexOf('invalid.com') >= 0) return delayedFailure({ type: API_ERROR_INVALID_CREDENTIALS }, 1000);
  if (email.indexOf('inactive.com') >= 0) return delayedFailure({ type: API_ERROR_USER_INACTIVE }, 1000);

  return delayedSuccess({
    accessToken: `my-secret-token-${email}-${password}`,
    refreshToken: 'refresh',
  },
  1000);
};

export const signUpWithEmail = (email, password, tos, pp) => {
  console.log(email, password, tos, pp);
  // return api.post(`/auth/sign-up`, { email, password });
  if (email.indexOf('fail.com') >= 0) return delayedFailure(`${email}-${password}-${tos.toString()}-${pp.toString()}`, 1000);
  if (email.indexOf('duplicate.com') >= 0) return delayedFailure({ type: API_ERROR_USER_EMAIL_IN_USE }, 1000);
  if (email.indexOf('inactive.com') >= 0) return delayedFailure({ type: API_ERROR_USER_INACTIVE }, 1000);

  return delayedSuccess({
    accessToken: `my-secret-token-${email}-${password}`,
    refreshToken: 'refresh',
  }, 1000);
};

export const signOut = () => delayedSuccess(null, 1000);
export const renewAccessToken = token => api.post('/auth/renew-token', { token });

export const requestResetPasswordByEmail = (email) => {
  // return api.post(`/password/send`, { email });
  if (email.indexOf('missing.com') >= 0) return delayedFailure({ type: API_ERROR_USER_NOT_FOUND }, 1000);
  if (email.indexOf('fail.com') >= 0) return delayedFailure(`random-${email}`, 1000);
  if (email.indexOf('inactive.com') >= 0) return delayedFailure({ type: API_ERROR_USER_INACTIVE }, 1000);

  return delayedSuccess(`random-${email}`, 1000);
};

export const validateResetPasswordToken = (token) => {
  // return api.post(`/password/validate`, { token });
  if (token.indexOf('fail') >= 0) return delayedFailure(`random-${token}`, 1000);

  return delayedSuccess(`random-${token}`, 1000);
};

export const resetPasswordWithToken = (password, token) => {
  // return api.post(`/password/reset`, { password, token });
  if (token.indexOf('fail') >= 0) return delayedFailure(`random-${token}`, 1000);

  return delayedSuccess({
    accessToken: `my-secret-token-${email}-${password}`,
    refreshToken: 'refresh',
  }, 1000);
};

export const requestAccountActivationByEmail = (email) => {
  // return api.post(`/password/send`, { email });
  if (email.indexOf('missing.com') >= 0) return delayedFailure({ type: API_ERROR_USER_NOT_FOUND }, 1000);
  if (email.indexOf('activated.com') >= 0) return delayedFailure({ type: API_ERROR_USER_ALREADY_ACTIVATED }, 1000);
  if (email.indexOf('fail.com') >= 0) return delayedFailure(`random-${email}`, 1000);

  return delayedSuccess(`random-${email}`, 1000);
};

export const validateAccountActivationToken = (token) => {
  // return api.post(`/password/validate`, { token });
  if (token.indexOf('activated') >= 0) return delayedFailure({ type: API_ERROR_USER_ALREADY_ACTIVATED }, 1000);
  if (token.indexOf('fail') >= 0) return delayedFailure(`random-${token}`, 1000);

  return delayedSuccess(`random-${token}`, 1000);
};

export const activateAccountWithToken = (password, tos, pp, token) => {
  // return api.post(`/password/reset`, { password, token });
  if (token.indexOf('activated') >= 0) return delayedFailure({ type: API_ERROR_USER_ALREADY_ACTIVATED }, 1000);
  if (token.indexOf('invalid') >= 0) return delayedFailure(`random-${token}`, 1000);

  return delayedSuccess({
    accessToken: `my-secret-token-${'email'}-${password}`,
    refreshToken: 'refresh',
  }, 1000);
};

export const getCurrentUser = () => authorizedApi.get('/users/me');
