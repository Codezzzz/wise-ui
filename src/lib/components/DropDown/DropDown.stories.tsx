/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Avatar from "../Avatar";
import DropDown from "./DropDown";
import AvatarTest from "../../assets/imgs/avatar_test.jpg";
import { useState } from "react";
import Divider from "../Divider";
export default {
  title: "components/DropDown",
  component: DropDown,
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => {
  const [value, setValue] = useState<string | number | null>();

  const handleDropDownMenu = (value: string | number) => {
    setValue(value);
  };

  const items = [
    "Item1",
    "Item2",
    "Divider",
    "Item3",
    "Item4",
    "Divider",
    "Item5",
    "Item6",
    "Item7",
  ];
  return (
    <div>
      <DropDown
        position={args.position}
        overlay={
          <>
            <DropDown.Header
              avatar={AvatarTest}
              name="Olivia Rhye"
              email="olivia@untitledui.com"
            />

            {items.map((item) => {
              if (item === "Divider") return <Divider />;

              return (
                <DropDown.Item
                  text={item}
                  icon="search"
                  onClick={() => handleDropDownMenu(item)}
                  active={value === item}
                />
              );
            })}
          </>
        }
      >
        <Avatar url={AvatarTest} size="md" />
      </DropDown>
    </div>
  );
};

export const Basic = Template.bind({});
