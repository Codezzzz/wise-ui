import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

export type PortalProps = {
	children: React.ReactNode;
};

function Portal({ children }: PortalProps) {
	const el = useMemo(() => document.createElement("div"), []);
	useEffect(() => {
		if (!el) return;
		document.body.appendChild(el);
		return () => {
			document.body.removeChild(el);
		};
	}, [el]);

	if (!el) return null;
	return createPortal(children, el);
}

export default Portal;
