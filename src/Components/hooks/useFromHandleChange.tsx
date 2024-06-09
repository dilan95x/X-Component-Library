import { useState } from "react";

type Props = {
  e: React.ChangeEvent<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function useFromHandleChange() {
  const [value, setValue] = useState("");

  const fromHandleChange = ({ e, onChange }: Props) => {
    if (onChange) {
      onChange(e);
    }
    setValue(e.target.value);
  };

  return { value, fromHandleChange };
}
