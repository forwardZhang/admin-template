import antfu from '@antfu/eslint-config';

import EslintIgnores from './eslint.ignores.js';

export default antfu({
  typescript: true,
  vue: true,
  jsonc: false,
  yaml: false,
  ignores: EslintIgnores,
  rules: {
    'no-console': 'off',
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'style/semi': ['error', 'always'],
  },
});
