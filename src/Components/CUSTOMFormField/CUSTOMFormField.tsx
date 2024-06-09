
import { fromHandleChangeProps } from "../types/fromHandleChangeProps.types";
import { FormFieldAdornmentIcon } from "./FormFieldAdornmentIcon";
import { CUSTOMFormFieldProps } from "../types/CUSTOMFormFieldProps.types";

interface Props extends CUSTOMFormFieldProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  handleFocus: () => void;
  handleBlur: () => void;
  fromHandleChange: (e: fromHandleChangeProps) => void;
  value: string;
  startIconStyle: React.CSSProperties;
  endIconStyle: React.CSSProperties;
  inputStyle: React.CSSProperties;
}

function CUSTOMFormField(props: Props) {
  const {
    type,
    name,
    disabled,
    onMouseEnter,
    onMouseLeave,
    onChange,
    startIcon,
    startIconStyle,
    handleFocus,
    handleBlur,
    endIcon,
    endIconStyle,
    inputStyle,
    value,
    fromHandleChange,
    ...rest
  } = props;

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <FormFieldAdornmentIcon icon={startIcon} iconStyle={startIconStyle} />
      <input
        id={name}
        type={type}
        name={name}
        disabled={disabled}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => {
          fromHandleChange({ e, onChange } as fromHandleChangeProps);
        }}
        value={value}
        placeholder=""
        style={inputStyle}
        {...rest}
      />

      <FormFieldAdornmentIcon icon={endIcon} iconStyle={endIconStyle} />
    </div>
  );
}

export { CUSTOMFormField };
