export interface ISigninRequest {
  password: string;
  email: string;
}
export interface ISignupRequest {
  confirmPassword: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface IResetPasswordRequest {
  email: string;
}
export interface INewPasswordRequest {
  confirmPassword: string;
  newPassword: string;
  token: string;
}
