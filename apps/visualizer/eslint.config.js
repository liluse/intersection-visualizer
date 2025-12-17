import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import ts from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import astroParser from "astro-eslint-parser";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Niepotrzebne w nowym React
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: ts.parser,
        extraFileExtensions: [".astro"],
      },
    },
  },
  {
    ignores: ["dist/", ".astro/", "node_modules/"],
  },
];