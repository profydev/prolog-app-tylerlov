// features/ui/input/input.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Input } from "./input";

export default {
  title: "UI/Input",
  component: Input,
  parameters: {},
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => (
  <div style={{ width: 340 }}>
    <Input {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "This is a label",
  errorMessage: "This is a error message.",
  hint: "This is a hint",
  disabled: false,
  showHint: false,
  showError: false,
  showLabel: false,
  showAlertIcon: false,
  showIcon: true,
  iconSrc: "/icons/mail.svg",
  alertIconSrc: "/icons/alert-circle.svg",
};
