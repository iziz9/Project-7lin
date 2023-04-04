export interface ReviewSelectState {
  name: string | undefined;
  isOpen: boolean;
}

export interface SignupFormValue {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
  year: string;
  month: string;
  day: string;
  gender: string;
  acceptTerms: boolean;
}

export interface LoginFormValue {
  email: string;
  password: string;
}

export interface NonMemberFormValue {
  orderNum: string;
  phone: string;
}

export interface FindIdFormValue {
  name: string;
  phone: string;
}

export interface FindPwFormValue {
  email: string;
  phone: string;
}

export interface ChangeInfoFormValue {
  password: string;
  confirmPassword: string;
  phone: string;
}

export interface SignUpRequest {
  email: string;
  password: string;
  validPassword: string;
  name: string;
  phone: string;
  birth: string;
  gender: string;
  age: string;
}
