export declare type DatePickerHeaderProps = {
    jumpToMonth: (month: number) => void;
    returnToday: () => void;
    date: moment.Moment;
};
declare function DatePickerHeader({ jumpToMonth, returnToday, date }: DatePickerHeaderProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default DatePickerHeader;
