
import { CUSTOMFormFieldProps } from "../../types/CUSTOMFormFieldProps.types";

interface Props extends CUSTOMFormFieldProps {
  commonBorderColor: string;
  focused: boolean;
  value: string;
}

export function useFormFieldStyles(props: Props) {
  const {
    colorvariant = "#0163CC",
    stylevariant = "default",
    startIcon = null,
    endIcon = null,
    disabled = false,
    fieldwidth = "100%",
    height = "3rem",
    commonBorderColor,
    focused,
    value,
  } = props;

  const inputStyle: React.CSSProperties = {
    width: fieldwidth,
    height,
    backgroundColor:  stylevariant === "default" ? "#fff" : "transparent",
    padding: stylevariant === "default" ? "0.6rem" : ".99rem .625rem .5rem 0",
    paddingLeft: startIcon ? "2rem" : "0.6rem",
    paddingRight: endIcon ? "1.8rem" : "0.6rem",
    fontSize: "1rem",
    border: stylevariant === "default" ? `0.13rem solid ${commonBorderColor}` : "none",
    borderBottom: `0.13rem solid ${commonBorderColor}`,
    borderRadius: "0.2rem",
    outline: stylevariant === "default" ? "visible" : "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
    marginBottom: "1.25rem",
  };

  const containerStyle: React.CSSProperties = {
    width: fieldwidth,
    height,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
    alignItems: "flex-start",
    opacity: disabled ? 0.4 : 1,
  };

  const labelStyle: React.CSSProperties = {
    position: stylevariant === "default" ? "initial" : "absolute",
    top: stylevariant === "simple" && startIcon ? "0" : focused || value ? "0" : "50%",
    left: "0",
    transform:
      stylevariant === "default"
        ? "none"
        : startIcon || endIcon
          ? focused || value
            ? "translateY(-50%)"
            : "translateY(0%)"
          : focused || value
            ? "translateY(-50%)"
            : "translateY(-50%)",
    fontSize: stylevariant === "default" ? "0.8rem" : focused || value ? "0.8rem" : "0.75rem",
    color: focused || value ? colorvariant : "#aaa",
    pointerEvents: "none",
    transition: "all 0.2s",
  };

  const iconStyle: React.CSSProperties = {
    position: "absolute",
    top: "35%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    color: value || focused ? colorvariant : "#898989",
  };

  const startIconStyle: React.CSSProperties = {
    ...iconStyle,
    left: "0.5rem",
  };

  const endIconStyle: React.CSSProperties = {
    ...iconStyle,
    right: "0.5rem",
  };

  return {
    inputStyle,
    containerStyle,
    labelStyle,
    startIconStyle,
    endIconStyle,
  };
}
