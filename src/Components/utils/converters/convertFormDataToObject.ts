export const convertFormDataToObject = (
  formData: FormData,
): Record<string, FormDataEntryValue> => {
  const object: Record<string, FormDataEntryValue> = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  return object;
};
