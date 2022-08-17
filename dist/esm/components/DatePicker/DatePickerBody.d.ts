export declare type DatePickerBodyProps = {
    date: moment.Moment;
    selectDate: moment.Moment | null;
    endDate: moment.Moment | null;
    handleDayClick: (current: moment.Moment) => void;
    handleDayMouseEvent: (current: moment.Moment | null) => void;
    hoverDate: moment.Moment | null;
};
declare function DatePickerBody({ date, selectDate, endDate, handleDayClick, handleDayMouseEvent, hoverDate }: DatePickerBodyProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default DatePickerBody;
