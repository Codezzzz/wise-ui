/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { createContext, useContext } from "react";

interface TabGroupContextValue {
	groupValue: string | number | null;
	onChangeValue?(value: string | number): void;
}

const TabGroupContext = createContext<TabGroupContextValue>({
	groupValue: null,
	onChangeValue: undefined
});

export interface TabGroupProps extends TabGroupContextValue {
	children: React.ReactNode;
	direction?: "row" | "column";
	gap?: string | number;
}

function TabGroup({
	onChangeValue,
	groupValue,
	children,
	direction = "row",
	gap = "1rem"
}: TabGroupProps) {
	return (
		<TabGroupContext.Provider
			value={{
				onChangeValue,
				groupValue
			}}
		>
			<div css={wrapper(direction, gap)}>{children}</div>
		</TabGroupContext.Provider>
	);
}

export default TabGroup;

export function useTabGroup() {
	const context = useContext(TabGroupContext);
	return context;
}

const wrapper = (direction: "row" | "column", gap: string | number) => css`
	display: flex;
	flex-direction: ${direction};
	gap: ${gap};
`;
