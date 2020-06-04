import { IApisConfig } from 'types/api-config.interface';

export const authRequests = {
  signin: {
    requiredAuth: false,
    endpoint: (): string => 'auth/signin',
    baseUrl: true,
    method: 'post'
  },

  signup: {
    requiredAuth: true,
    endpoint: (): string => 'auth/signup',
    baseUrl: true,
    method: 'post'
  },

  resetPassword: {
    requiredAuth: false,
    endpoint: (): string => 'auth/reset-password',
    baseUrl: true,
    method: 'patch'
  },

  newPassword: {
    requiredAuth: true,
    endpoint: (): string => 'auth/new-password',
    baseUrl: true,
    method: 'patch'
  },

  verifyEmail: {
    requiredAuth: true,
    endpoint: (): string => 'auth/verify-email',
    baseUrl: true,
    method: 'post'
  }
} as IApisConfig;
