/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export type FlexDirectionProps = {
  children: React.ReactNode;
  /** 아이템과 아이템에 간격을 설정합니다. */
  gap?: number | string;

  width?: number | string;
  justifyContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "end"
    | "space-between"
    | "space-around";
  alignItems?: string;
  className?: string;
};

/** 요소들의 flex 방향을 설정한다 */
function FlexDirection({ children }: FlexDirectionProps) {
  return <>{children}</>;
}

function Row({
  children,
  gap,
  width,
  justifyContent,
  alignItems,
  className,
}: FlexDirectionProps) {
  return (
    <div
      css={[
        directionStyle("row"),
        gapStyle("row", gap),

        { width, justifyContent, alignItems },
      ]}
      className={className}
    >
      {children}
    </div>
  );
}

function Column({
  children,
  gap,
  width,
  justifyContent,
  alignItems,
  className,
}: FlexDirectionProps) {
  return (
    <div
      css={[
        directionStyle("column"),
        gapStyle("column", gap),

        { width, justifyContent, alignItems },
      ]}
      className={className}
    >
      {children}
    </div>
  );
}
FlexDirection.defaultProps = {
  gap: "1rem",
  width: "100%",
};

FlexDirection.Row = Row;
FlexDirection.Column = Column;

const gapStyle = (direction: "row" | "column", gap?: number | string) => {
  const marginType =
    direction === "row"
      ? css`
          margin-left: ${gap};
        `
      : css`
          margin-top: ${gap};
        `;

  return css({
    "& > *:not(:first-of-type)": marginType,
  });
};

const directionStyle = (direction: "row" | "column") => {
  return css`
    display: flex;
    flex-direction: ${direction};
  `;
};

export { FlexDirection };
