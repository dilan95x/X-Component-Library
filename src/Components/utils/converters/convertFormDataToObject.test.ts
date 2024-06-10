
import { convertFormDataToObject } from "./convertFormDataToObject";

describe("convertFormDataToObject", () => {
  test("converts FormData to an object", () => {
    const formData = new FormData();
    formData.append("name", "Test User");
    formData.append("email", "test.user@example.com");
    formData.append("age", "30");

    const result = convertFormDataToObject(formData);

    const expected = {
      name: "Test User",
      email: "test.user@example.com",
      age: "30",
    };

    expect(result).toEqual(expected);
  });

  test("handles empty FormData", () => {
    const formData = new FormData();

    const result = convertFormDataToObject(formData);

    const expected = {};

    expect(result).toEqual(expected);
  });

  test("handles FormData with multiple values for the same key", () => {
    const formData = new FormData();
    formData.append("key", "value1");
    formData.append("key", "value2");

    const result = convertFormDataToObject(formData);

    const expected = {
      key: "value2",
    };

    expect(result).toEqual(expected);
  });

  test("handles different data types in FormData", () => {
    const formData = new FormData();
    const file = new File(["file content"], "file.txt", { type: "text/plain" });
    formData.append("file", file);

    const result = convertFormDataToObject(formData);

    const expected = {
      file,
    };

    expect(result).toEqual(expected);
  });
});
