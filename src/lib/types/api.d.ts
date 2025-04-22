declare type SuccessfulResponse<T> = {
  [key: string]: "success";
} & T;

declare type ErrorResponse = {
  message: string;
  code: number;
};

declare type Pagination<T> = {
  meta: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
} & T;

declare type ApiResponse<T> = SuccessfulResponse<T> | ErrorResponse;
