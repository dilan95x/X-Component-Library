import { useState } from "react";

export function useFocusChecker() {
  const [focused, setFcused] = useState(false);
  const handleFocus = () => setFcused(true);
  const handleBlur = () => setFcused(false);

  return { focused, handleBlur, handleFocus };
}
