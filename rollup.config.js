/* eslint-disable */
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import svgr from "@svgr/rollup";
import url from "rollup-plugin-url";
import dts from "rollup-plugin-dts";
import reactSvg from "rollup-plugin-react-svg";

const packageJson = require("./package.json");

export default [
  {
    input: "src/lib/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "react-lib",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript(),
      url(),
      svgr(),
      terser(),
      reactSvg(),
    ],
  },
  {
    input: "src/lib/index.ts",
    output: [{ file: packageJson.types, format: "es" }],
    plugins: [
      url(),
      svgr({
        typescript: true,
      }),
      dts(),
      reactSvg(),
    ],
  },
];
