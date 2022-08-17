/// <reference types="react" />
export declare type PortalProps = {
    children: React.ReactNode;
};
declare function Portal({ children }: PortalProps): import("react").ReactPortal | null;
export default Portal;
