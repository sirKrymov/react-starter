export type Request<T> = (
  payload?: T,
  onSuccess?: (res: Record<string, any>) => void,
  onFail?: (res: Record<string, any>) => void
) => void;
