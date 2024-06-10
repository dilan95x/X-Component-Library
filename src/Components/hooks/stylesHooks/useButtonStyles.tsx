
import { CUSTOMButtonProps } from "../../types/CUSTOMButtonProps.types";
import { hexToRgba } from "../../utils/converters/hexToRGBA";

interface Props extends CUSTOMButtonProps {
  isHover: boolean;
}

export function useButtonStyles(props: Props) {
  const {
    loading,
    disabled,
    color,
    isHover,
    btnstyle='contained',
    textcolor,
    width,
    size = "md",
    fontSize,
    textTransform = "uppercase",
    customStyle,
  } = props;

  const styles: React.CSSProperties = {
    backgroundColor:
      loading || disabled
        ? "#4f5054"
        : btnstyle === "contained"
          ? color
          : isHover
          ? hexToRgba(color ?? "", 0.20)
          : hexToRgba(color ?? "", 0.10),
    border: loading || disabled ? "none" : btnstyle === "contained" ? "none" : `0.0006rem solid ${color}`,
    filter: isHover ? "brightness(0.9)" : "brightness(1)",
    opacity: disabled || loading ? 0.5 : 1,
    color: disabled || loading ? "gray" : btnstyle === "contained" ? textcolor : color,
    width: width ?? size === "sm" ? "7.5rem" : size === "md" ? "10rem" : size === "lg" ? "12.5rem" : size,
    height: size === "sm" ? "2.5rem" : size === "md" ? "3.125rem" : size === "lg" ? "3.75rem" : size,
    textAlign: "center",
    cursor: loading || disabled ? "not-allowed" : "pointer",
    fontWeight: 400,
    fontSize,
    textTransform,
    minWidth: 64,
    padding: "0.25rem 0.625rem",
    transition: "0.3s",
    borderRadius: 4,
    boxShadow: "0rem 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1), 0rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.8)",
    ...customStyle,
  };

  return { styles };
}
