import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: ['src/index.tsx'],
  output: [
    {
      file: 'lib/react-viewport-hooks.esm.js',
      format: 'es'
    },
    {
      file: 'lib/react-viewport-hooks.cjs.js',
      format: 'cjs'
    }
  ],

  plugins: [
    resolve(),
    typescript(),
    terser(),
    commonjs({
      include: 'node_modules/**',
      ignoreGlobal: true
    })
  ],
  external: ['react']
};
