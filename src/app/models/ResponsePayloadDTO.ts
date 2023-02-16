export interface ResponsePayloadDTO<T> {
    statusCode: number;
    message: string;
    results: T;
  }