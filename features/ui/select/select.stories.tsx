import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Select } from "./select";

export default {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: "option1", label: "Olivia Rhye" },
    { value: "option2", label: "Phoenix Baker" },
    { value: "option3", label: "Lana Steiner" },
  ],
  icon: undefined,
  label: "Label ",
};
Default.parameters = {
  viewMode: "docs",
};
