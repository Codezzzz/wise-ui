/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontSize } from "lib/styles/font";
import { colorPalette } from "lib/styles/palette";
import { useAvatarGroup } from "../AvatarGroup/AvatarGroup";
export type AvatarProps = {
  size?: AvatarSizeType;
  /** 아바타 이미지 */
  url: string;
  /** on 아이콘 visible 여부 */
  on?: boolean;
  /** Avatar group에 사용 되는 uniqe 값 */
  idx?: number;
};

export type AvatarSizeType = "xs" | "sm" | "md" | "lg" | "xl" | "xl2";

function Avatar({ size = "xs", url, on = false, idx }: AvatarProps) {
  const { group, sizeGroup, visibleMaxLegnth } = useAvatarGroup();

  const sizeCondition = sizeGroup ? sizeGroup : size;

  if (idx!! >= visibleMaxLegnth!!) return <></>;
  return (
    <span css={[style(group), avaterSizes[sizeCondition]]}>
      <img src={url} alt="avatar" />
      {on && <span className="on"></span>}
    </span>
  );
}

export default Avatar;

const style = (group: boolean | null) => css`
  display: inline-block;
  border-radius: 50%;
  position: relative;
  ${group &&
  css`
    border: 1.5px solid #ffffff;
  `}
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    margin: 0 auto;
    object-fit: cover;
  }

  .on {
    background: ${colorPalette("success500")};
    border: 1.5px solid #ffffff;
    border-radius: 50%;
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
`;

export const avaterSizes = {
  xs: css`
    width: 24px;
    height: 24px;
    font-size: ${fontSize.xs};

    .on {
      width: 6px;
      height: 6px;
    }
  `,
  sm: css`
    width: 32px;
    height: 32px;
    font-size: ${fontSize.sm};
    .on {
      width: 8px;
      height: 8px;
    }
  `,
  md: css`
    width: 40px;
    height: 40px;
    font-size: ${fontSize.md};
    .on {
      width: 10px;
      height: 10px;
    }
  `,
  lg: css`
    width: 48px;
    height: 48px;
    font-size: ${fontSize.lg};
    .on {
      width: 12px;
      height: 12px;
    }
  `,
  xl: css`
    width: 56px;
    height: 56px;
    font-size: ${fontSize.xl};
    .on {
      width: 14px;
      height: 14px;
    }
  `,
  xl2: css`
    width: 64px;
    height: 64px;
    font-size: ${fontSize.xl};
    .on {
      width: 16px;
      height: 16px;
    }
  `,
};
