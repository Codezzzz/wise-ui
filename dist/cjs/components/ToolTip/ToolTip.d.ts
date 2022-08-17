/// <reference types="react" />
export declare type ToolTipProps = {
    /** unique id */
    id?: string;
    children?: React.ReactNode;
    theme?: "dark";
    text: string;
    placement?: "top" | "bottom" | "right" | "left";
    effect?: "float" | "solid";
    /** 글로벌 툴팁 사용 / 같은 tooltip 사용시 같은 아이디 부여하기 */
    global?: boolean;
};
declare function ToolTip({ id, children, text, theme, placement, effect, global }: ToolTipProps): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace ToolTip {
    var Content: ({ id, children }: {
        id: string;
        children?: import("react").ReactNode;
    }) => import("@emotion/react/jsx-runtime").JSX.Element;
}
export default ToolTip;
