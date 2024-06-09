import { useState } from "react";

export function useHoverChecker() {
  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  return { isHover, onMouseEnter, onMouseLeave };
}
