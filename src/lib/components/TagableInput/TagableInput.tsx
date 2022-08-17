/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { v4 } from "uuid";
import { inputStyle } from "../Input/Input";
import Tag from "../Tag";
type TagType = {
	text: string;
	id: number;
};

export type TagableInputProps = {
	width?: number | string;
	height?: number | string;
	disabled?: boolean;
	message?: string;
	tags?: TagType[];
	placeholder?: string;
};

function TagableInput({
	width = "100%",
	height = "44px",
	message,
	disabled = false,
	tags = [],
	placeholder = "동의어 추가..."
}: TagableInputProps) {
	const [value, setValue] = useState("");
	const [tagItems, setTagItems] = useState(tags);
	const handleOnBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		setTagData();
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setTagData();
		}
	};

	const setTagData = () => {
		if (value.length > 0 && !findDuplicates(value)) {
			const tag = { text: value, id: v4() };

			const temp = [...tagItems, tag];

			setTagItems(temp);

			setValue("");
		}
	};

	const onClickTagItem = (id: number) => {
		const temp = tagItems.filter(tag => tag.id !== id);

		setTagItems(temp);
	};

	const findDuplicates = (value: string) => {
		return tagItems.filter(tag => tag.text === value).length > 0;
	};

	return (
		<div css={[style(message, disabled)]}>
			<div className="input" css={[{ width }, { minHeight: height }]}>
				{tagItems.map(tag => (
					<Tag
						key={tag.id}
						closeable
						onClick={() => onClickTagItem(tag.id)}
						size="lg"
					>
						{tag.text}
					</Tag>
				))}

				<input
					type="text"
					value={value}
					placeholder={placeholder}
					onBlur={e => handleOnBlur(e)}
					onChange={e => handleChange(e)}
					onKeyPress={e => handleOnKeyPress(e)}
				/>
			</div>
		</div>
	);
}

export default TagableInput;

const style = (message: string | undefined, disabled: boolean) => css`
	${inputStyle(message, disabled)}

	.input {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		padding: 10px 14px;
	}

	input {
		margin-left: 5px;
		position: static;
		flex: 1;
		min-width: 100px;
	}
`;
