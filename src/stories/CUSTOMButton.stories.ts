import type { Meta, StoryObj } from "@storybook/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import CUSTOMButton from "../Components/CUSTOMButton";

const meta: Meta<typeof CUSTOMButton> = {
  component: CUSTOMButton,
  args: {
    onClick: () => {
      alert("Button Clicked");
    },
  },
};

export default meta;
type ButtonStory = StoryObj<typeof CUSTOMButton>;

export const ContainedButton: ButtonStory = {
  args: {
    children: "Button",
    color: "#0163CC",
    textcolor: "white",
    size: "lg",
    btnstyle: "contained",
    fontSize: "1rem",
  },
};

export const OutlinedButton: ButtonStory = {
  args: {
    children: "Button",
    color: "#0163CC",
    textcolor: "white",
    size: "lg",
    btnstyle: "outlined",
    fontSize: "1rem",
  },
};

export const LoadingButton: ButtonStory = {
  args: {
    children: "Button",
    textcolor: "white",
    size: "lg",
    loading: true,
    fontSize: "1rem",
  },
};

export const DisabledButton: ButtonStory = {
  args: {
    children: "Button",
    textcolor: "white",
    size: "lg",
    disabled: true,
    fontSize: "1rem",
  },
};

export const ButtonWithStartIcon: ButtonStory = {
  args: {
    children: "Button",
    startIcon: faUser,
    textcolor: "white",
    color: "#0163CC",
    size: "lg",
    fontSize: "1rem",
  },
};

export const ButtonWithEndIcon: ButtonStory = {
  args: {
    children: "Button",
    endIcon: faUser,
    textcolor: "white",
    color: "#0163CC",
    size: "lg",
    fontSize: "1rem",
  },
};
