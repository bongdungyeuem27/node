import typescript from '@rollup/plugin-typescript';

export default {
  input: './app/app.js',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true
  },
  plugins: [typescript()]
};