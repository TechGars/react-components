import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';
const postcssConfig = require('./postcss.config');

/* eslint-disable-next-line import/no-default-export */
export default [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      del({ targets: ['dist/*'] }),
      postcss(postcssConfig),
      json(),
      nodeResolve(),
      commonjs({
        namedExports: {
          'node_modules/prop-types/index.js': ['elementType'],
          'node_modules/react-is/index.js': ['ForwardRef', 'Memo', 'isFragment'],
        },
      }),
      typescript({
        tsconfigOverride: {
          include: ['src/**/*.ts', 'src/**/*.tsx'],
          exclude: ['src/**/*.spec.ts', 'src/**/*.spec.tsx', 'src/**/*.stories.tsx', 'jest.setup.ts'],
        },
      }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
  {
    input: 'tailwind.config.js',
    output: {
      file: 'dist/tailwind.config.js',
      format: 'cjs',
    },
    plugins: [commonjs()],
  },
];
