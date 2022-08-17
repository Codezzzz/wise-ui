/** @jsxImportSource @emotion/react */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import AvatarGroup from "./AvatarGroup";
import AvatarTest from "../../assets/imgs/avatar_test.jpg";
import Avatar from "../Avatar";
export default {
  title: "components/AvatarGroup",
  component: AvatarGroup,
} as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> = (args) => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <AvatarGroup {...args} size={data.length}>
        {data.map((item, index) => (
          <Avatar key={index} url={AvatarTest} idx={index} />
        ))}
      </AvatarGroup>
    </div>
  );
};

export const Basic = Template.bind({});
