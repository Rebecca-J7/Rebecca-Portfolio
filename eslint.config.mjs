import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import query from "@tanstack/eslint-plugin-query";
import { defineConfig } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";

export default defineConfig({
  ignores: ["dist/*", ".next/", "out/", "node_modules"],
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  languageOptions: { globals: { ...globals.node } },
  plugins: {
    react,
    "@next/next": nextPlugin,
    "@typescript-eslint": tseslint.plugin,
    "@tanstack/query": query,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
  },
});

// export default [
//   {
//     ignores: ["dist/*"],
//   },
//   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
//   {
//     ignores: [".next/", "out/", "node_modules"],
//   },
//   { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
//   { languageOptions: { globals: { ...globals.node } } },
//   eslint.configs.recommended,
//   ...tseslint.configs.recommended,
//   {
//     plugins: {
//       react: react,
//       prettier: prettier,
//       "@typescript-eslint": tseslint.plugin,
//       "@tanstack/query": query,
//     },
//   },
//   {
//     rules: {
//       "react/react-in-jsx-scope": "off",
//       "@typescript-eslint/no-unused-expressions": "off",
//       "no-unused-vars": "off",
//       "@typescript-eslint/no-unused-vars": "error",
//     },
//   },
// ];
