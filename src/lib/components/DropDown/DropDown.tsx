/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AvatarTest from "../../assets/imgs/avatar_test.jpg";
import { Icon } from "../Icon";
import Text from "../Text";
import { useOutSideClick } from "../../hooks";
import { fontFamily, fontSize } from "lib/styles/font";
import { colorPalette } from "lib/styles/palette";
import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState
} from "react";
import Avatar from "../Avatar";
import Divider from "../Divider";
import FlexDirection from "../FlexDirection";
import { IconType } from "../Icon/Icon";
import Space from "../Space";
export type DropDownProps = {
	children: React.ReactNode;
	overlay: React.ReactNode;
	position?: "left" | "right";
};

function DropDown({ children, overlay, position = "right" }: DropDownProps) {
	const [open, setOpen] = useState(false);
	const [pos, setPos] = useState<"left" | "right">("right");
	// useEffect(() => {
	// 	window.addEventListener("keydown", e => {
	// 		console.log("dsf", e.metaKey, e.ctrlKey, e.altKey, e.shiftKey);

	// 		console.log(
	// 			(e.metaKey ? "⌘-" : "") + String.fromCharCode(e.keyCode)
	// 		);
	// 	});
	// }, []);

	useEffect(() => {
		setPos(position);
	}, [position]);

	const [componentRef] = useOutSideClick({ callback: () => setOpen(false) });

	const dropDownItemRef = useRef<HTMLDivElement>(null);

	const isInViewport = useCallback(
		(offset = 0) => {
			if (!dropDownItemRef.current) return false;
			let left = dropDownItemRef.current.getBoundingClientRect().left;

			if (position === "right") {
				left = dropDownItemRef.current.getBoundingClientRect().right;
			}
			return left + offset >= 0 && left - offset <= window.innerWidth;
		},
		[position]
	);

	useLayoutEffect(() => {
		/**
		 * 현재 아이템이 가려짐 여부에 따라서 보여지는 방향 수정
		 */
		const isVisibleElement = isInViewport();

		if (open && !isVisibleElement) {
			if (position === "right") {
				setPos("left");
			} else {
				setPos("right");
			}
		}
	}, [isInViewport, open, position]);

	return (
		<div css={[style(pos)]} ref={componentRef}>
			<div
				onClick={() => setOpen(prev => !prev)}
				css={css`
					cursor: pointer;
				`}
			>
				{children}
			</div>
			{open && (
				<div className="overlay_wrapper" ref={dropDownItemRef}>
					{overlay}
				</div>
			)}
		</div>
	);
}

export type DropDownHeaderProps = {
	avatar?: string;
	name: string;
	email: string;
};

function Header({ avatar = AvatarTest, name, email }: DropDownHeaderProps) {
	return (
		<>
			<FlexDirection.Row
				css={dropDownHeader}
				gap="0.75rem"
				alignItems="center"
			>
				<div>
					<Avatar url={avatar} on size="md" />
				</div>
				<div>
					<Text
						as="span"
						size={fontSize.sm}
						fontFamily="Medium"
						color="gray700"
						lineHeight="20px"
						clamp={1}
					>
						{name}
					</Text>
					<Text
						as="span"
						size={fontSize.sm}
						fontFamily="Normal"
						color="gray500"
						lineHeight="20px"
						clamp={1}
					>
						{email}
					</Text>
				</div>
			</FlexDirection.Row>
			<Divider />
		</>
	);
}

export type DropDownItemProps = {
	onClick?: () => void;
	text: React.ReactNode;
	active?: boolean;
	icon: IconType;
	commend?: string;
};

function Item({
	text,
	active = false,
	onClick,
	icon,
	commend
}: DropDownItemProps) {
	return (
		<div css={dropDownItem(active)} onClick={() => onClick?.()}>
			<Icon icon={icon} size="12px" />
			<Space type="left" gap="0.875rem" />
			<FlexDirection.Row justifyContent="space-between" width="100%">
				<Text
					size={fontSize.sm}
					fontFamily="Normal"
					color="gray700"
					lineHeight="20px"
				>
					{text}
				</Text>

				{commend && (
					<Text
						size={fontSize.xs}
						fontFamily="Normal"
						color="gray500"
						lineHeight="18px"
					>
						{commend}
					</Text>
				)}
			</FlexDirection.Row>
		</div>
	);
}

DropDown.Item = Item;
DropDown.Header = Header;
export default DropDown;

const style = (position: "left" | "right") => css`
	width: fit-content;
	position: relative;

	.overlay_wrapper {
		z-index: 999;
		width: fit-content;
		position: absolute;
		top: calc(100% + 5px);
		border: 1px solid ${colorPalette("gray100")};
		box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
			0px 4px 6px -2px rgba(16, 24, 40, 0.03);
		border-radius: 8px;
		overflow: hidden;
		${position === "left"
			? css`
					right: 0px;
			  `
			: css`
					left: 0px;
			  `}
	}
`;

const dropDownItem = (active: boolean) => css`
	display: flex;
	align-items: center;
	padding: 10px 16px;
	width: 240px;
	height: 40px;
	background: white;
	cursor: pointer;
	span.commend {
		color: ${colorPalette("gray500")};
		font-family: ${fontFamily.Normal};
		font-size: ${fontSize.xs};
		line-height: 18px;
	}

	${active &&
	css`
		background: ${colorPalette("gray50")};
	`}
`;

const dropDownHeader = css`
	padding: 12px 16px;
	width: 240px;
	min-width: 240px;
	overflow: hidden;
	background: white;
`;
