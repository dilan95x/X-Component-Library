import type { Meta, StoryObj } from "@storybook/react";
import { CUSTOMForm } from "../Components/CUSTOMForm";
import { convertFormDataToObject } from "../Components/utils/converters/convertFormDataToObject";

const submit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const data = convertFormDataToObject(formData);
  const subTotal = (Number(data.price) || 0) * Number(data.quantity);
  const discount = (subTotal * (Number(data.discount) || 0)) / 100;
  const total = subTotal - discount;

  alert(`Calculation: $${total}`);
};

const meta: Meta<typeof CUSTOMForm> = {
  component: CUSTOMForm,
};

export default meta;
type FormStory = StoryObj<typeof CUSTOMForm>;

export const Form: FormStory = {
  args: {
    width: "15rem",
    onSubmit: submit,
  },
};
