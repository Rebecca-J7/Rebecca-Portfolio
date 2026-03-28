import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier/recommended";
import query from "@tanstack/eslint-plugin-query";
import { defineConfig } from 'eslint/config'
import nextPlugin from '@next/eslint-plugin-next'
import nextConfig from 'eslint-config-next/core-web-vitals'

const eslintConfig = defineConfig([
  {
    ignores: ["dist/*"],
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: [".next/", "out/", "node_modules"],
    files: ["**/*.js"], languageOptions: { sourceType: "commonjs" },
    languageOptions: { globals: { ...globals.node } },
    ...eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...nextConfig,
    plugins: {
      '@next/next': nextPlugin,
      react: react,
      prettier: prettier,
      "@typescript-eslint": tseslint.plugin,
      "@tanstack/query": query,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
])
export default eslintConfig

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
