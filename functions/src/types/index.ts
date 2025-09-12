export type SuccessRes<T> = {
  success: true;
  data: T;
};

export type ErrorRes = {
  success: false;
  error: string;
};
