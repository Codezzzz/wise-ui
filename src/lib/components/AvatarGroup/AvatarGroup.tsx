/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontFamily } from "lib/styles/font";
import { colorPalette } from "lib/styles/palette";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AvatarSizeType, avaterSizes } from "../Avatar/Avatar";

type AvatarGroupContextValue = {
	group: boolean | null;
	sizeGroup?: AvatarSizeType;
	visibleMaxLegnth?: number;
};

const AvatarGroupContext = createContext<AvatarGroupContextValue>({
	group: null,
	sizeGroup: undefined,
	visibleMaxLegnth: 3
});

export type AvatarGroupProps = {
	children: React.ReactNode;
	sizeGroup?: AvatarSizeType;
	/** 클릭했을 때 호출할 함수 */
	size: number;
	/** 보여지는 avatar 갯수 설정  */
	visibleMaxLegnth?: number;
};

function AvatarGroup({
	children,
	sizeGroup = "xs",
	size,
	visibleMaxLegnth = 5
}: AvatarGroupProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [moreSize, setMoreSize] = useState(0);

	useEffect(() => {
		setMoreSize(visibleMaxLegnth);
	}, [visibleMaxLegnth]);

	useEffect(() => {
		if (ref.current) {
			console.log(ref.current.offsetHeight);
		}
	}, []);
	return (
		<AvatarGroupContext.Provider
			value={{ group: true, sizeGroup, visibleMaxLegnth: moreSize }}
		>
			<div
				css={[style, gap(sizeGroup, moreSize), avaterSizes[sizeGroup]]}
				ref={ref}
			>
				{children}

				{size - moreSize > 0 && (
					<span
						className="more"
						css={[avaterSizes[sizeGroup]]}
						onClick={() => setMoreSize(size)}
					>
						+{size - moreSize}
					</span>
				)}
			</div>
		</AvatarGroupContext.Provider>
	);
}

export default AvatarGroup;

export function useAvatarGroup() {
	const context = useContext(AvatarGroupContext);

	return context;
}

const style = css`
	position: relative;
	width: 100% !important;
	margin-right: 10px;
	overflow: hidden !important;
	span {
		position: absolute;
	}

	.more {
		cursor: pointer;
		border-radius: 50%;
		background: ${colorPalette("gray50")};
		color: ${colorPalette("gray600")};
		border: 2px solid #ffffff;
		align-items: center;
		display: flex;
		justify-content: center;
		font-family: ${fontFamily.Medium};
	}
`;

const gap = (sizeGroup: AvatarSizeType, visibleMaxLegnth: number) => {
	let gapStyle: any[] = [];

	for (let i = 2; i <= visibleMaxLegnth; i++) {
		const item = css`
			& span:nth-of-type(${i}) {
				left: ${gapGenerate(sizeGroup) * (i - 1)}px;
			}
		`;

		gapStyle.push(item);
	}

	const moreSpan = css`
		& span:nth-of-type(${visibleMaxLegnth + 1}) {
			left: ${gapGenerate(sizeGroup) * (visibleMaxLegnth + 1 - 1)}px;
		}
	`;

	gapStyle.push(moreSpan);

	return gapStyle;
};

const gapGenerate = (sizeGroup: AvatarSizeType) => {
	const data = ["xs", "sm", "md", "lg", "xl", "xl2"];
	let gap = 0;
	data.forEach((item, index) => {
		if (item === sizeGroup) {
			gap = 8 * (index + 2);
		}
	});

	return gap;
};
