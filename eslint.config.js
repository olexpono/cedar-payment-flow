import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default tseslint
  .config(
    { ignores: ["dist"] },
    {
      extends: [
        js.configs.recommended,
        ...tseslint.configs.recommendedTypeChecked,
        ...tseslint.configs.stylisticTypeChecked,
      ],
      files: ["**/*.{ts,tsx}"],
      settings: { react: { version: "18.3" } },
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
          tsconfigRootDir: import.meta.dirname,
          project: [
            "./tsconfig.node.json",
            "./tsconfig.app.json",
            "./tsconfig.tests.json",
          ],
        },
      },
      plugins: {
        "react-hooks": reactHooks,
        "react-refresh": reactRefresh,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        ...react.configs["jsx-runtime"].rules,
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
      },
    },
  )
  .concat(eslintPluginPrettier);
