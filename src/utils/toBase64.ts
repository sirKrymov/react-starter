export type Base64 = string | ArrayBuffer | null;

export default function toBase64(file: File): Promise<Base64> {
  return new Promise(resolve => {
    const reader = new FileReader();

    reader.onloadend = (): void => {
      resolve(reader.result);
    };

    reader.readAsDataURL(file);
  });
}
