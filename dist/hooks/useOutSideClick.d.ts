/// <reference types="react" />
declare type UseOutSideClickProps = {
    callback: () => void;
};
/**
 * 해당 엘리먼트를 제외한 부분 클릭 체크
 */
declare function UseOutSideClick({ callback }: UseOutSideClickProps): import("react").MutableRefObject<null>[];
export default UseOutSideClick;
