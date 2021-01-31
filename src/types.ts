export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export type SignupFormValues = User;
export type LoginFormValues = Pick<User, "email" | "password">;
export type LandingFormValues = Pick<User, "email">;

export const DEFAULT_USER: User = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
};
