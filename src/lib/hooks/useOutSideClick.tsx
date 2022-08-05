import { useEffect, useRef } from "react";

type UseOutSideClickProps = {
	callback: () => void;
};

/**
 * 해당 엘리먼트를 제외한 부분 클릭 체크
 */
function UseOutSideClick({ callback }: UseOutSideClickProps) {
	const componentRef = useRef(null);

	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
		function handleClick(e: any) {
			if (componentRef && componentRef.current) {
				const ref: any = componentRef.current;
				if (!ref.contains(e.target)) {
					callback();
				}
			}
		}
	}, [callback]);
	return [componentRef];
}

export default UseOutSideClick;
