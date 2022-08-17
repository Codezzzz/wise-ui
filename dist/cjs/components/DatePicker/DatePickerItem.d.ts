/// <reference types="react" />
import moment from "moment";
export declare type DatePickerItemProps = {
    date: moment.Moment;
    today: moment.Moment;
    selectDate: moment.Moment | null;
    endDate: moment.Moment | null;
    handleDayClick: (current: moment.Moment) => void;
    handleDayMouseEvent: (current: moment.Moment | null) => void;
    hoverDate: moment.Moment | null;
};
declare function DatePickerItem({ date, today, selectDate, handleDayClick, handleDayMouseEvent, hoverDate, endDate }: DatePickerItemProps): import("@emotion/react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof DatePickerItem>;
export default _default;
