import { toJS } from 'mobx';

export function logger(label: string, data?: any): void {
  if (process.env.REACT_APP_HOST_ENV === 'development') {
    console.log(label + ' -------------------->');
    console.log(toJS(data));
  }
}

export const capitalize = (str: string): string => {
  const lowerStr = str.toLowerCase();

  return lowerStr.slice(0, 1).toUpperCase() + lowerStr.slice(1);
};

export const isEmptyObject = (obj: Record<string, any> | null): boolean =>
  !obj || (obj && !Object.keys(obj).length);

export const isPlainObject = (obj: any): boolean => {
  if (typeof obj !== 'object' || obj === null) return false;

  return !(obj instanceof Array);
};

export const filterObjectFields = (
  obj: Record<string, any>,
  clearFields: string[]
): Record<string, any> => {
  Object.keys(obj).forEach(i => {
    if (!clearFields.includes(i)) {
      delete obj[i];
    }
  });

  return { ...obj };
};

export const ENV = (variable: string): string => process.env[variable] || '';
