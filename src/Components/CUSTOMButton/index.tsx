import React from "react";
import { CUSTOMButtonProps } from "../types/CUSTOMButtonProps.types";
import { useHoverChecker } from "../hooks/useHoverChecker";
import { useButtonStyles } from "../hooks/stylesHooks/useButtonStyles";
import { CUSTOMButtonChildren } from "./CUSTOMButtonChildren";

function Index(props: CUSTOMButtonProps) {
  const {
    children = "",
    link = undefined,
    openInNewTab = false,
    color = "#0163CC",
    startIcon = null,
    endIcon = null,
    loading = false,
    title = null,
    type = "button",
    name = "",
    disabled = false,
    fontSize = "1rem",
    onClick,
    ...rest
  } = props;

  const { isHover, onMouseEnter, onMouseLeave } = useHoverChecker();
  const { styles } = useButtonStyles({ ...props, isHover });

  const onClickLogic = disabled ? () => {} : onClick;
  const linkHrefLogic = disabled ? "/" : link;
  const linkTargetLogic = openInNewTab ? "_blank" : "_self";
  const linkStyles = {
    textDecoration: "none",
    color: color,
    cursor: disabled ? "not-allowed" : "pointer",
  };

  return (
    <a href={linkHrefLogic} target={linkTargetLogic} rel="noopener noreferrer" style={linkStyles}>
      <button
        name={name}
        type={type}
        onClick={onClickLogic}
        disabled={disabled || loading}
        style={styles}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...rest}
      >
        <CUSTOMButtonChildren
          startIcon={startIcon}
          endIcon={endIcon}
          title={title}
          fontSize={fontSize}
          loading={loading}
        >
          {children}
        </CUSTOMButtonChildren>
      </button>
    </a>
  );
}

export default Index;
