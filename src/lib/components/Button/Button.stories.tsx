/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icon } from "../Icon";
import Button from "./Button";

export default {
  title: "components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: "Button",
  size: "small",
  disabled: false,
  theme: "primary",
  width: "100px",
};

Basic.argTypes = {
  onClick: { action: "clicked" },
};

export function Type() {
  return (
    <div css={buttonWrapper}>
      <Button>PRIMARY</Button>
      <Button theme="base">SECONDARY</Button>
      <Button theme="error">TERTIARY</Button>
    </div>
  );
}

const buttonWrapper = css`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  & + & {
    margin-top: 0.5rem;
  }
`;

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <Button size="small">BUTTON</Button>

      <Button size="medium">BUTTON</Button>

      <Button size="big">BUTTON</Button>
    </div>
  );
};

export const datePikcerButtonExample = () => {
  return (
    <Button
      width="141px"
      theme="base"
      size="small"
      iconGap="0.65625rem"
      icon={<Icon icon="calendar" />}
    >
      Select dates
    </Button>
  );
};
