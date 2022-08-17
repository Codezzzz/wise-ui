/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import Modal from "../Modal";
import { Icon } from "../Icon";
import FlexDirection from "../FlexDirection";
import Space from "../Space";
import Text from "../Text";
import { fontSize } from "lib/styles/font";
export type DialogProps = {
	visible: boolean;
	title?: string;
	description?: string;
	children?: React.ReactNode;
	hideButtons?: boolean;
	cancelable?: boolean;
	cancelText: string;
	confirmText: string;
	onCancel?: () => void;
	onConfirm?: () => void;
	/**
	 * modal animation
	 */
	transitionType?: "pop" | "fade";
	/**
	 * 버튼 방향을 지정한다
	 */
	buttonDirection?: "column" | "row";
	modalMainIcon?: React.ReactElement;
};

function Dialog({
	visible,
	title,
	description,
	children,
	hideButtons,
	cancelable,
	cancelText,
	confirmText,
	onCancel,
	onConfirm,
	transitionType = "pop",
	buttonDirection = "row",
	modalMainIcon
}: DialogProps) {
	return (
		<Modal visible={visible} transitionType={transitionType}>
			<div css={whiteBox}>
				<FlexDirection.Row
					justifyContent="space-between"
					alignItems="flex-start"
				>
					{modalMainIcon ? modalMainIcon : <div></div>}

					<Icon
						icon="close"
						size="12px"
						css={css`
							cursor: pointer;
						`}
						onClick={onCancel}
					/>
				</FlexDirection.Row>

				{title && (
					<>
						<Space type="top" gap="1.25rem" />
						<Text
							as="h3"
							fontFamily="Bold"
							lineHeight="28px"
							color="gray900"
							size={fontSize.lg}
						>
							{title}
						</Text>
					</>
				)}
				{description && (
					<>
						<Space type="top" gap="0.25rem" />
						<Text
							as="h3"
							fontFamily="Normal"
							lineHeight="20px"
							color="gray500"
							size={fontSize.sm}
						>
							{description}
						</Text>
					</>
				)}

				{children}

				{!hideButtons && (
					<ButtonGroup
						css={{ "margin-top": "2rem" }}
						direction={buttonDirection}
					>
						{cancelable && (
							<Button
								theme="base"
								onClick={onCancel}
								size="small"
								width="100%"
							>
								{cancelText}
							</Button>
						)}
						<Button
							onClick={onConfirm}
							theme="primary"
							size="small"
							width="100%"
						>
							{confirmText}
						</Button>
					</ButtonGroup>
				)}
			</div>
		</Modal>
	);
}

export default Dialog;

Dialog.defaultProps = {
	cancelText: "Cancel",
	confirmText: "Confirm"
};

const whiteBox = css`
	position: relative;

	p {
		font-size: 1.125rem;
		margin: 0;
		color: #868e96;
	}
`;
