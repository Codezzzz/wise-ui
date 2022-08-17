export declare type SliderProps = {
    /** Slider 최솟값 */
    min?: number;
    /** Slider 최대값 */
    max?: number;
    onChange?: ({ min, max }: SliderValue) => void;
    /** Slider width */
    width?: number | string;
    /** 한번 움직일떄 바뀌는 값  default : 1*/
    step?: number;
    type?: "normal" | "followBottom" | "followTop";
    /** 양뱡향 여부 */
    isTwoWay?: boolean;
    /** 서버 데이터  */
    sliderValue?: {
        minVal: number;
        maxVal?: number;
    };
};
export declare type SliderValue = {
    min: number;
    max: number;
};
declare function Slider({ min, max, onChange, width, step, type, isTwoWay, sliderValue }: SliderProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Slider;
