export const hexToRgba = (hex: string, alpha: number = 1) => {
  const hexRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;
  const isHex = hexRegex.test(hex);
  if (!isHex) return "";

  let r = 0;
  let g = 0;
  let b = 0;

  if (hex[1] && hex[2] && hex[3] && hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex[1] && hex[2] && hex[3] && hex[5] && hex[6] && hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  return `rgba(${r},${g},${b},${alpha ?? 1})`;
};
