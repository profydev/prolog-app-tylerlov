import { FormEvent } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Checkbox, CheckboxSize } from "./checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Checkbox>;

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const submittedData: { [key: string]: FormDataEntryValue | null } = {};
  const keys = Array.from(data.keys());

  for (const key of keys) {
    submittedData[key] = data.get(key);
  }

  alert(`Data error: ${JSON.stringify(submittedData)}`);
};

const Template: StoryFn<typeof Checkbox> = ({
  label,
  disabled,
  indeterminate,
  checked,
  size,
}) => (
  <form onSubmit={handleSubmit} method="post" action="https://google.com">
    <div>
      <Checkbox
        label={label}
        checked={checked}
        disabled={disabled}
        indeterminate={indeterminate}
        size={size}
      />
    </div>
  </form>
);

export const Default = Template.bind({});

Default.args = {
  label: "Checkbox label",
  checked: false,
  indeterminate: false,
  disabled: false,
  size: CheckboxSize.small,
};

Default.parameters = {
  viewMode: "docs",
};
