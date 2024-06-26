import type { Meta, StoryObj } from "@storybook/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import CUSTOMFormField from "../Components/CUSTOMFormField";

const meta: Meta<typeof CUSTOMFormField> = {
  component: CUSTOMFormField,
  args: {
    onChange: () => {
      alert("Value Changed");
    },
  },
};

export default meta;
type FormFieldStory = StoryObj<typeof CUSTOMFormField>;

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // these console added for user tester to check
  console.log(`Value Changed: ${e.target.value}`);
};

export const OutlinedFormField: FormFieldStory = {
  args: {
    label: "Custom Label",
    fieldwidth: "15rem",
    onChange: handleChange,
    stylevariant: "simple",
  },
};

export const OutlinedFormFieldDisabled: FormFieldStory = {
  args: {
    label: "Custom Label",
    fieldwidth: "15rem",
    onChange: handleChange,
    disabled: true,
    stylevariant: "simple",
  },
};

export const OutlinedFormFieldWithStartIcon: FormFieldStory = {
  args: {
    label: "Custom Label",
    fieldwidth: "15rem",
    onChange: handleChange,
    startIcon: faUser,
    stylevariant: "simple",
  },
};

export const OutlinedFormFieldWithEndIcon: FormFieldStory = {
  args: {
    label: "Custom Label",
    fieldwidth: "15rem",
    onChange: handleChange,
    endIcon: faUser,
    stylevariant: "simple",
  },
};

export const DefaultFormField: FormFieldStory = {
  args: {
    label: "Custom Label",
    fieldwidth: "15rem",
    onChange: handleChange,
  },
};

export const DefaultFormFieldWithStartIcon: FormFieldStory = {
  args: {
    label: "Custom Label",
    fieldwidth: "15rem",
    onChange: handleChange,
    startIcon: faUser,
  },
};

export const FormFieldWithEndIcon: FormFieldStory = {
  args: {
    label: "Custom Label",
    fieldwidth: "15rem",
    onChange: handleChange,
    endIcon: faUser,
  },
};
