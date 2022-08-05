/// <reference types="react" />
export declare type FlexDirectionProps = {
    children: React.ReactNode;
    /** 아이템과 아이템에 간격을 설정합니다. */
    gap?: number | string;
    width?: number | string;
    justifyContent?: "center" | "flex-end" | "flex-start" | "end" | "space-between" | "space-around";
    alignItems?: string;
    className?: string;
};
/** 요소들의 flex 방향을 설정한다 */
declare function FlexDirection({ children }: FlexDirectionProps): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace FlexDirection {
    var defaultProps: {
        gap: string;
        width: string;
    };
    var Row: ({ children, gap, width, justifyContent, alignItems, className, }: FlexDirectionProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    var Column: ({ children, gap, width, justifyContent, alignItems, className, }: FlexDirectionProps) => import("@emotion/react/jsx-runtime").JSX.Element;
}
export { FlexDirection };
