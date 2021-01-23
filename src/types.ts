export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export const DEFAULT_USER: User = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
};
