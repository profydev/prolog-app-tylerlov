import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Checkbox, CheckboxSize, CheckboxState } from "./checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    //layout: "fullscreen",
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = ({
  label,
  size,
  state,
  name,
  checked,
}) => (
  <div>
    <Checkbox
      label={label}
      size={size}
      state={state}
      name={name}
      checked={checked}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox Label",
  size: CheckboxSize.small,
  state: CheckboxState.default,
  name: "checkbox",
  checked: false,
};
Default.parameters = {
  viewMode: "docs",
};
