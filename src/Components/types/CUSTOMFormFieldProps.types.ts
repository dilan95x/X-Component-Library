import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type CUSTOMFormFieldProps = {
  colorvariant?: string;
  stylevariant?: "default" | "simple";
  label?: string;
  startIcon?: IconProp | null;
  endIcon?: IconProp | null;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fieldwidth?: string;
  height?: string;
  name?: string;
  type?: "text" | "email" | "password" | "number";
};
