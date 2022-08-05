import { useEffect, useRef } from "react";
/**
 * 해당 엘리먼트를 제외한 부분 클릭 체크
 */
function UseOutSideClick(_a) {
    var callback = _a.callback;
    var componentRef = useRef(null);
    useEffect(function () {
        document.addEventListener("click", handleClick);
        return function () { return document.removeEventListener("click", handleClick); };
        function handleClick(e) {
            if (componentRef && componentRef.current) {
                var ref = componentRef.current;
                if (!ref.contains(e.target)) {
                    callback();
                }
            }
        }
    }, [callback]);
    return [componentRef];
}
export default UseOutSideClick;
