/*
核心引擎	eslint	ESLint 核心库
官方规则集	@eslint/js	ESLint 官方推荐的 JavaScript 规则集
全局变量支持	globals	用于配置和识别全局变量
TypeScript 支持	typescript-eslint	为 TypeScript 提供 ESLint 支持
类型定义（辅助）	@types/node	Node.js 类型定义（虽然命令中未列出，但表格中有提及）
Prettier 集成	eslint-plugin-prettier, eslint-config-prettier	集成 Prettier 代码格式化工具
Vue.js 支持	eslint-plugin-vue	为 Vue.js 项目提供 ESLint 支持
*/
import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import ignores from "./eslint.ignores.js";

export default defineConfig(
  {
    ignores, // 忽略项
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier],
    plugins: {
      prettier: eslintPluginPrettier
    },
    languageOptions: {
      ecmaVersion: "latest", // ECMAScript 语法支持版本
      sourceType: "module", // 模块化类型
      parser: tseslint.parser //  解析器
    },
    rules: {
      "no-var": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "vue/multi-word-component-names": "off",
      "prefer-const": "error"
    }
  },
  {
    ignores,
    files: ["apps/**/*.{js,ts,jsx,tsx,vue}", "packages/**/*.{js,ts,jsx,tsx,vue}"],
    extends: [...eslintPluginVue.configs["flat/recommended"], eslintConfigPrettier],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }
);
