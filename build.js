const esbuild = require('esbuild');
const { stimulusPlugin } = require('esbuild-plugin-stimulus');

esbuild.build({
  entryPoints: ['src/application.js'],
  bundle: true,
  outfile: 'out.js',
  target: 'es2016',
  plugins: [stimulusPlugin()],
}).catch(() => process.exit(1));
