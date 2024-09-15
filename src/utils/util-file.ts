export const readImageFile = (
  file: File,
  fn: (base64: string) => void,
) => {
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      fn(base64String);
    };
    reader.readAsDataURL(file);
  }
};
