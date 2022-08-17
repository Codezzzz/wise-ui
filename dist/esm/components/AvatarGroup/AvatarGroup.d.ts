/// <reference types="react" />
import { AvatarSizeType } from "../Avatar/Avatar";
declare type AvatarGroupContextValue = {
    group: boolean | null;
    sizeGroup?: AvatarSizeType;
    visibleMaxLegnth?: number;
};
export declare type AvatarGroupProps = {
    children: React.ReactNode;
    sizeGroup?: AvatarSizeType;
    /** 클릭했을 때 호출할 함수 */
    size: number;
    /** 보여지는 avatar 갯수 설정  */
    visibleMaxLegnth?: number;
};
declare function AvatarGroup({ children, sizeGroup, size, visibleMaxLegnth }: AvatarGroupProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default AvatarGroup;
export declare function useAvatarGroup(): AvatarGroupContextValue;
