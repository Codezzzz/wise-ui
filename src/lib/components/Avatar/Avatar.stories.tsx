/** @jsxImportSource @emotion/react */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Avatar from "./Avatar";
import AvatarTest from "../../assets/imgs/avatar_test.jpg";
export default {
  title: "components/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {
  return (
    <div>
      <Avatar {...args} url={AvatarTest} />
    </div>
  );
};

export const Basic = Template.bind({});
