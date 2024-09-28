const esbuild = require('esbuild');

const baseConfig = {
	keepNames: true,
	minify: true,
	external: ['node-fetch'],
	loader: {
	  '.json': 'copy',
	},
}

esbuild.build({
  ...baseConfig,
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'dist/esm',
  sourcemap: false,
  platform: 'node',
  format: 'esm',
  target: 'node20', 
  external: ['node-fetch'],
  loader: {
    '.json': 'copy',
  },
  logLevel: 'silent',
}).catch(() => process.exit(1));

esbuild.build({
  ...baseConfig,
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'dist/cjs',
  sourcemap: true,
  platform: 'node',
  format: 'cjs',
  target: 'node20',
  outExtension: { '.js': '.cjs' }, 
}).catch(() => process.exit(1));

esbuild.build({
  ...baseConfig,
  entryPoints: ['./src/index.ts'],
  bundle: true,
  sourcemap: true,
  format: 'esm',
  target: 'esnext',
  outdir: './dist/clean',
  platform: 'node',
  external: ['node-fetch'],
  plugins: [],
  outExtension: { '.js': '.mjs' }, 
}).catch(() => process.exit(1));