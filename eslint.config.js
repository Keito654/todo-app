import antfu from '@antfu/eslint-config';
import { configs as ReactQueryConfigs, rules as ReactQueryRules } from '@tanstack/eslint-plugin-query';

export default antfu({
  stylistic: {
    semi: true,
  },
  react: true,
  ignores: [
    'tsconfig.json',
    'tsconfig.node.json',
    'vite.config.ts',
  ],
}).append(
  {
    plugins: {
      '@tanstack/eslint-plugin-query': { rules: ReactQueryRules, configs: ReactQueryConfigs },
    },
    rules: {
      '@tanstack/eslint-plugin-query/exhaustive-deps': 'error',
      '@tanstack/eslint-plugin-query/no-rest-destructuring': 'warn',
      '@tanstack/eslint-plugin-query/stable-query-client': 'error',
    },

  },
);
