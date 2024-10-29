export type UserLogin = {
  email: string;
  password: string;
};

export type UserLoginWithUsername = {
  email: string;
  username: string;
  password?: string | null;
};

export type UserLoginWithGoogle = {
  email: string;
  username: string;
  image: string;
};
