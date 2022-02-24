import typescript from '@rollup/plugin-typescript'

// rollup.config.js
export default {
  input: 'src/index.ts',
  output: {
    file: 'build/js/index.js',
    name: 'index',
    format: 'iife',
  },
  plugins: [
    typescript({
      target: 'ES5',
      declaration: true,
      outDir: 'build/js',
      rootDir: 'src',
    }),
  ],
}
