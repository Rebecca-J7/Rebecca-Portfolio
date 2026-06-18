import globals from "globals";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["dist/*", ".next/", "out/", "node_modules"],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,tsx,ts}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: { ...globals.node, ...globals.browser },
    },
  },
];

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
