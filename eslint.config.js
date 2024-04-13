import antfu from '@antfu/eslint-config';

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
});
