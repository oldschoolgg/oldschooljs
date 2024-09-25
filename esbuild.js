const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'dist/esm',
  sourcemap: false,
  minify: true,
  platform: 'node',
  format: 'esm',
  target: 'node20', 
  external: ['fs', 'path'],
  treeShaking: true, 
  loader: {
    '.json': 'copy',
  },
  logLevel: 'silent',
}).catch(() => process.exit(1));

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'dist/cjs',
  sourcemap: true,
  minify: true,
  platform: 'node',
  format: 'cjs',
  target: 'node20',
  keepNames: true,
  loader: {
    '.json': 'copy',
  },
}).catch(() => process.exit(1));
