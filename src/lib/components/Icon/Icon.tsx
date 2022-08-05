/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as icons from "../../assets/icon/svg";

export type IconType = keyof typeof icons;

export const iconTypes: IconType[] = Object.keys(icons) as any[];

export type IconProps = {
  /** 사용 할 아이콘 타입 */
  icon: IconType;
  /** 아이콘 색상 */
  color?: string;
  /** 아이콘 크기 */
  size?: string | number;
  /** 아이콘 rotate 값 */
  rotate?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};

/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 * 스타일로 모양새를 설정 할 때에는 `color`로 색상을 설정하고 `width`로 크기를 설정하세요.
 */
const Icon = ({ icon, color, size, className, rotate, onClick }: IconProps) => {
  const SVGIcon = icons[icon];
  const rotateDeg = `rotate(${rotate}deg)`;
  return (
    <SVGIcon
      onClick={(e) => onClick?.(e)}
      css={[
        {
          width: size,
          minWidth: size,
          height: "auto",
          transform: rotateDeg,
          transition: "all 0.3s ease",
          marginTop: "2px",
        },
        onClick && { cursor: "pointer" },
        color && style(color),
      ]}
      className={className}
    />
  );
};

Icon.defaultProps = {
  rotate: "0",
};
export default Icon;

const style = (color: string) => css`
  path {
    stroke: ${color};
  }
`;
