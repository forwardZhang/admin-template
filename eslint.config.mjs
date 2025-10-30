import antfu from '@antfu/eslint-config';

import EslintIgnores from './eslint.ignores.js';

export default antfu({
  typescript: true,
  vue: true,
  jsonc: false,
  yaml: false,
  ignores: EslintIgnores,
  rules: {
    // 禁用console 关闭
    'no-console': 'off',
    // vue 书写顺序
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    // 单引号
    'style/semi': ['error', 'always'],
    // ts 必须带分号
    'style/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    }],
    // vue属性换行 3个以上换行，每行最多1个
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/html-self-closing': 'off',
    'unused-imports/no-unused-imports': 'off',
    'no-unused-vars': 'warn',
  },
});
