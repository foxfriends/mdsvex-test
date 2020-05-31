const Bundler = require('parcel-bundler');
const Path = require('path');
const { HttpServer } = require('http-server');

(async function() {
  const bundler = new Bundler('./index.html');
  bundler.addAssetType('svx', require.resolve('parcel-plugin-svelte/lib/svelte-asset.js'));
  await bundler.bundle();
  const server = new HttpServer({ root: './dist', cache: -1 });
  server.listen(1234);
})();
