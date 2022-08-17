import moment from "moment";
export declare type DatePickerData = {
    startDate: moment.Moment | null;
    endDate: moment.Moment | null;
};
export declare type DatePickerProps = {
    /** Datepicker range 모드 */
    range?: boolean;
    /** Datepicker 데이터 get 액션 */
    onChange?: ({ startDate, endDate }: DatePickerData) => void;
    /** Datepicker 취소 액션 */
    handleCancel?: () => void;
    open?: boolean;
};
declare function DatePicker({ range, onChange, handleCancel, open }: DatePickerProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default DatePicker;
