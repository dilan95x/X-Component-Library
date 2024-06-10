import React from "react";
import { useFormFieldStyles } from "../hooks/stylesHooks/useFormFieldStyles";
import { useFocusChecker } from "../hooks/useFocusChecker";
import { useFromHandleChange } from "../hooks/useFromHandleChange";
import { useHoverChecker } from "../hooks/useHoverChecker";
import { CUSTOMFormFieldProps } from "../types/CUSTOMFormFieldProps.types";

import { CUSTOMFormField } from "./CUSTOMFormField";

function Index(props: CUSTOMFormFieldProps) {
  const { colorvariant = "#0163CC", stylevariant = "default", label = "Label" } = props;

  const { isHover, onMouseEnter, onMouseLeave } = useHoverChecker();
  const { focused, handleBlur, handleFocus } = useFocusChecker();
  const { value, fromHandleChange } = useFromHandleChange();

  const commonBorderColor = focused ? colorvariant : isHover ? "black" : "#a9a6ab";

  const { inputStyle, containerStyle, labelStyle, startIconStyle, endIconStyle } = useFormFieldStyles({
    ...props,
    commonBorderColor,
    focused,
    value,
  });

  return (
    <div style={containerStyle}>
      {stylevariant === "default" && (
        <label htmlFor={props.name} style={labelStyle}>
          {label}
        </label>
      )}
      <CUSTOMFormField
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        startIconStyle={startIconStyle}
        endIconStyle={endIconStyle}
        inputStyle={inputStyle}
        value={value}
        fromHandleChange={fromHandleChange}
        {...props}
      />
      {stylevariant === "simple" && <label style={labelStyle}>{label}</label>}
    </div>
  );
}

export default Index;
