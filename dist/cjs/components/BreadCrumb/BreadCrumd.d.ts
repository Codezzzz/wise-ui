export declare type BreadCrumdData = {
    text: string;
    path: string;
    isHide?: boolean;
};
export declare type BreadCrumdProps = {
    maxContentLength?: number;
    breadCrumd: BreadCrumdData[];
};
declare function BreadCrumd({ maxContentLength, breadCrumd }: BreadCrumdProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default BreadCrumd;
