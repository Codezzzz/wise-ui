import moment from "moment";
export declare type DatePickerInfoProps = {
    startDate: moment.Moment | null;
    endDate: moment.Moment | null;
    returnToday: () => void;
    range: boolean;
};
declare function DatePickerInfo({ startDate, endDate, returnToday, range }: DatePickerInfoProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default DatePickerInfo;
