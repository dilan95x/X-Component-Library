import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type CUSTOMButtonProps = {
  children?: string;
  link?: string;
  openInNewTab?: boolean;
  size?: "sm" | "md" | "lg" | string;
  textcolor?: string;
  color?: string;
  customStyle?: React.CSSProperties;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  btnstyle?: "contained" | "outlined";
  startIcon?: IconProp | null;
  endIcon?: IconProp | null;
  fontSize?: string;
  loading?: boolean;
  title?: string;
  name?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
  width?: string | null;
  disabled?: boolean;
};
