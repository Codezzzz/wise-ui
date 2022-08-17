declare module "*.mdx";

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;

  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "uuid";
declare module "*.otf";
declare module "*.woff";
declare module "*.ttf";
declare module "react-json-editor-viewer";
