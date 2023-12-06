import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Select } from "./select";

export default {
  title: "UI/Select",
  component: Select,
  parameters: {},
  argTypes: {
    options: {
      control: "array",
    },
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => (
  <div style={{ width: 320 }}>
    <Select {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  options: [
    "Phoenix Baker",
    "Olivia Rhye",
    "Lana Steiner",
    "Demi Wilkinson",
    "Candice Wu",
    "Natali Craig",
    "Drew Cano",
  ],
  iconSrc: "/icons/user.svg",
  label: "This is a label",
  errorMessage: "This is a error message.",
  hint: "This is a hint",
  disabled: false,
  showIcon: false,
  showHint: false,
  showError: false,
  showLabel: false,
};
