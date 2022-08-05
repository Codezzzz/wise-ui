/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Icon, iconTypes } from "../Icon";
import UseCopyToClipboard from "../../hooks/useCopyToClipboard";
import { IconType } from "./Icon";
export default {
  component: Icon,
  title: "components/Icon",
};

export const icon = () => <Icon icon="favorite" />;
icon.story = {
  name: "Default",
};

export const customSize = () => <Icon icon="favorite" size="4rem" />;

export const customColor = () => <Icon icon="favorite" color="red" />;

export const customizedWithStyle = () => (
  <Icon icon="favorite" css={{ color: "red", width: "4rem" }} />
);

export const listOfIcons = () => {
  const [value, copy] = UseCopyToClipboard();
  const temp = [...iconTypes];

  const handleCopy = (icon: IconType) => {
    copy(`<Icon icon="${icon}" />`);
  };
  return (
    <ul css={iconListStyle}>
      {temp.map((icon) => (
        <li key={icon} onClick={() => handleCopy(icon)}>
          <Icon icon={icon} size="10px" />
          {icon}
        </li>
      ))}
    </ul>
  );
};

const iconListStyle = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;
