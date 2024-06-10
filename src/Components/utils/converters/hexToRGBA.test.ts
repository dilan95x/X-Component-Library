import { hexToRgba } from "./hexToRGBA";

 
describe("hexToRgba", () => {
  test("converts 3-digit hex code to rgba", () => {
    const hex = "#abc";
    const alpha = 0.5;
    const result = hexToRgba(hex, alpha);
    const expected = "rgba(170,187,204,0.5)";
    expect(result).toBe(expected);
  });

  test("converts 6-digit hex code to rgba", () => {
    const hex = "#abcdef";
    const alpha = 0.75;
    const result = hexToRgba(hex, alpha);
    const expected = "rgba(171,205,239,0.75)";
    expect(result).toBe(expected);
  });

  test("uses default alpha value when not provided", () => {
    const hex = "#123456";
    const result = hexToRgba(hex);
    const expected = "rgba(18,52,86,1)";
    expect(result).toBe(expected);
  });

  test("returns empty string for invalid hex code", () => {
    const hex = "#zzz";
    const result = hexToRgba(hex);
    const expected = "";
    expect(result).toBe(expected);
  });

  test("handles lowercase hex code", () => {
    const hex = "#abc";
    const result = hexToRgba(hex);
    const expected = "rgba(170,187,204,1)";
    expect(result).toBe(expected);
  });

  test("handles uppercase hex code", () => {
    const hex = "#ABCDEF";
    const result = hexToRgba(hex);
    const expected = "rgba(171,205,239,1)";
    expect(result).toBe(expected);
  });

  test("handles mixed-case hex code", () => {
    const hex = "#aBcDeF";
    const result = hexToRgba(hex);
    const expected = "rgba(171,205,239,1)";
    expect(result).toBe(expected);
  });
});
