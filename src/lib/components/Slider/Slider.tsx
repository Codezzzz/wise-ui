/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontFamily, fontSize } from "lib/styles/font";
import { colorPalette } from "lib/styles/palette";
import { useCallback, useEffect, useRef, useState } from "react";
export type SliderProps = {
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
	sliderValue?: { minVal: number; maxVal?: number };
};

export type SliderValue = {
	min: number;
	max: number;
};

function Slider({
	min = 0,
	max = 100,
	onChange,
	width = "100%",
	step = 1,
	type = "normal",
	isTwoWay = false,
	sliderValue = { minVal: 0, maxVal: 100 }
}: SliderProps) {
	const [minVal, setMinVal] = useState(min);
	const [maxVal, setMaxVal] = useState(max);

	const minValRef = useRef(min);
	const maxValRef = useRef(max);

	const range = useRef<HTMLDivElement>(null);

	const getPercent = useCallback(
		(value: number) => ((value - min) / (max - min)) * 100,
		[min, max]
	);

	useEffect(() => {
		/**
		 * server data default set
		 */
		setMinVal(sliderValue.minVal);
		minValRef.current = sliderValue.minVal;

		if (isTwoWay) {
			const serverMaxVal = sliderValue.maxVal ? sliderValue.maxVal : 100;
			setMaxVal(serverMaxVal);
			maxValRef.current = serverMaxVal;
		}
	}, [isTwoWay, sliderValue.maxVal, sliderValue.minVal]);

	useEffect(() => {
		const minPercent = getPercent(minVal);
		const maxPercent = getPercent(maxValRef.current);

		if (range.current) {
			range.current.style.left = `${minPercent}%`;
			range.current.style.width = `${maxPercent - minPercent}%`;
		}
	}, [minVal, getPercent]);

	useEffect(() => {
		const minPercent = getPercent(minValRef.current);
		const maxPercent = getPercent(maxVal);

		if (range.current) {
			range.current.style.width = `${maxPercent - minPercent}%`;
		}
	}, [maxVal, getPercent]);

	/**
	 * 상단 부모에게 변화된 값 전달
	 */

	const [activeThumb, setActiveThumb] = useState<string | null>(null);
	useEffect(() => {
		onChange?.({ min: minVal, max: maxVal });
	}, [minVal, maxVal, onChange]);

	const handleRangeMin = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = Math.min(Number(e.target.value), maxVal);
			setMinVal(value);
			minValRef.current = value;

			/** active current thumb */
			setActiveThumb("left");
		},
		[maxVal]
	);

	const handleRangeMax = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = Math.max(Number(e.target.value), minVal);
			setMaxVal(value);
			maxValRef.current = value;

			/** active current thumb */
			setActiveThumb("right");
		},
		[minVal]
	);

	return (
		<div css={[style, { width }]}>
			<input
				type="range"
				min={min}
				max={max}
				value={minVal}
				step={step}
				onChange={handleRangeMin}
				className="thumb thumb_left"
				css={generateZindex(minVal, max)}
			/>
			<input
				type="range"
				min={min}
				max={max}
				value={maxVal}
				step={step}
				onChange={handleRangeMax}
				className="thumb thumb_right"
			/>

			<div className="slider">
				<div className="slider_track" />
				<div
					ref={range}
					css={sliderRangeFollowText(type, minVal, maxVal, isTwoWay)}
					className="slider_range"
				>
					<span
						css={[
							thumbStyle["left"],
							thumbHoverChangeStyle(activeThumb, "left")
						]}
					></span>

					{isTwoWay && (
						<span
							css={[
								thumbStyle["right"],
								thumbHoverChangeStyle(activeThumb, "right")
							]}
						></span>
					)}
				</div>

				{type === "normal" && (
					<>
						<div className="slider_left_value">{minVal}%</div>

						{isTwoWay && (
							<div className="slider_right_value">{maxVal}%</div>
						)}
					</>
				)}
			</div>
		</div>
	);
}

export default Slider;

const style = () => css`
	position: relative;
	display: flex;
	justify-content: center;
	.slider {
		position: relative;
		width: 100%;
	}

	.slider_track,
	.slider_range,
	.slider_left_value,
	.slider_right_value {
		position: absolute;
	}

	.slider_track,
	.slider_range {
		border-radius: 4px;
		height: 8px;
	}

	.slider_track {
		background-color: ${colorPalette("gray200")};
		width: 100%;
		z-index: 1;
	}

	.slider_left_value,
	.slider_right_value {
		${sliderTextStyle}
		margin-top: 1.5rem;
	}

	.slider_left_value {
		left: -12px;
	}

	.slider_right_value {
		right: -12px;
	}

	/* 기본 스타일 삭제 */
	.thumb,
	.thumb::-webkit-slider-thumb {
		-webkit-appearance: none;
		-webkit-tap-highlight-color: transparent;
	}

	.thumb {
		width: 100%;
		pointer-events: none;
		position: absolute;
		opacity: 0;
		margin-bottom: 20px;
		top: -13px;
		outline: none;
		width: calc(100% + 24px);
	}

	.thumb_left {
		z-index: 3;
	}

	.thumb_right {
		z-index: 4;
	}

	/* For Chrome browsers */
	.thumb::-webkit-slider-thumb {
		${sliderThumbStyle}
	}

	/* For Firefox browsers */
	.thumb::-moz-range-thumb {
		${sliderThumbStyle}
	}
`;

/**
 * Slider Thumb 위치 따라다니는 text styles
 * 1. 하단 텍스트 바긋
 * 2. 상단 텍스트 박스
 */
const sliderRangeFollowText = (
	type: SliderProps["type"],
	min: number,
	max: number,
	isTwoWay: boolean = false
) => css`
	background-color: ${colorPalette("primary600")};
	z-index: 2;
	position: relative;
	${type === "followBottom" &&
	css`
		&:before {
			content: "${min}%";
			position: absolute;
			left: -12px;
			${sliderTextStyle}
			margin-top: 1.5rem;
			transform: translateX(-50% + 12px);
		}

		${isTwoWay &&
		css`
			&:after {
				content: "${max}%";
				position: absolute;
				right: -12px;
				transform: translateX(-50% + 12px);
				${sliderTextStyle}
				margin-top: 1.5rem;
			}
		`}
	`}

	${type === "followTop" &&
	css`
		&:before {
			content: "${min}%";
			position: absolute;
			left: -22px;
			top: -66px;
			${sliderTextStyle};
			${sliderFollowUpText}
		}

		${isTwoWay &&
		css`
			&:after {
				content: "${max}%";
				position: absolute;
				right: -22px;
				top: -66px;
				${sliderTextStyle};
				${sliderFollowUpText}
			}
		`}
	`}
`;

/**
 * thumb 겹쳤을 경우 z-index 우선 순위
 */

const generateZindex = (minVal: number, max: number) => {
	return minVal === max
		? css`
				z-index: 5 !important;
		  `
		: css`
				z-index: 3 !important;
		  `;
};

/**
 * 기본 nomal text
 */
const sliderTextStyle = css`
	font-family: ${fontFamily.Medium};
	color: ${colorPalette("gray900")};
	font-size: ${fontSize.md};
	margin-top: 1rem;
`;

/**
 * Slider up style
 */
const sliderFollowUpText = css`
	font-size: ${fontSize.xs};
	color: ${colorPalette("gray700")};
	border: 1px solid ${colorPalette("gray100")};
	border-radius: 8px;
	padding: 8px 12px;
	width: 42px;
	height: 34px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
		0px 4px 6px -2px rgba(16, 24, 40, 0.03);
	background-color: white;
`;

/**
 * Slider Thumb style
 */
const sliderThumbStyle = css`
	border: 1px solid ${colorPalette("primary600")};
	background-color: white;
	border-radius: 50%;
	cursor: pointer;
	height: 24px;
	width: 24px;
	margin-top: 6px;
	pointer-events: all;
	position: relative;
`;
/**
 * Thumb 좌우 스타일 설정
 */
const thumbStyle = {
	left: css`
		${sliderThumbStyle}
		position: absolute;
		width: 24px;
		left: -12px;
		margin: 0;
		top: 50%;
		transform: translateY(-50%);
		pointer-events: none;
	`,
	right: css`
		${sliderThumbStyle}
		position: absolute;
		width: 24px;
		right: -12px;
		margin: 0;
		top: 50%;
		pointer-events: none;
		transform: translateY(-50%);
	`
};

const thumbHoverChangeStyle = (
	activeThumb: string | null,
	type: "left" | "right"
) => css`
	${activeThumb === type &&
	css`
		box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
			0px 1px 2px rgba(16, 24, 40, 0.06), 0px 0px 0px 4px #f4ebff;
	`}
`;
