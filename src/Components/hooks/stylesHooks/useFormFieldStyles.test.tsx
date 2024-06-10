import { CUSTOMFormFieldProps } from "../../types/CUSTOMFormFieldProps.types";
import { useFormFieldStyles } from "./useFormFieldStyles";

interface Props extends CUSTOMFormFieldProps {
  commonBorderColor: string;
  focused: boolean;
  value: string;
}

describe("useFormFieldStyles", () => {
  it("should return styles object based on input props", () => {
    const props: Props = {
      colorvariant: "#0163CC",
      stylevariant: "default",
      startIcon: null,
      endIcon: null,
      disabled: false,
      fieldwidth: "100%",
      height: "3rem",
      commonBorderColor: "#4f5054",
      focused: false,
      value: "",
    };

    const result = useFormFieldStyles(props);

    expect(result).toEqual(
      expect.objectContaining({
        inputStyle: {
          width: "100%",
          height: "3rem",
          padding: "0.6rem",
          paddingLeft: "0.6rem",
          paddingRight: "0.6rem",
          fontSize: "1rem",
          border: "0.13rem solid #4f5054",
          borderBottom: "0.13rem solid #4f5054",
          backgroundColor: "#fff",
          borderRadius: "0.2rem",
          outline: "visible",
          transition: "border-color 0.2s",
          boxSizing: "border-box",
          marginBottom: "1.25rem",
        },
        containerStyle: {
          width: "100%",
          height: "3rem",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "0.3rem",
          alignItems: "flex-start",
          opacity: 1,
        },
        labelStyle: {
          position: "initial",
          top: "50%",
          left: "0",
          transform: "none",
          fontSize: "0.8rem",
          color: "#aaa",
          pointerEvents: "none",
          transition: "all 0.2s",
        },
        startIconStyle: {
          position: "absolute",
          top: "35%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          color: "#898989",
          left: "0.5rem",
        },
        endIconStyle: {
          position: "absolute",
          top: "35%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          color: "#898989",
          right: "0.5rem",
        },
      }),
    );
  });
});
