const Path = require('path');
const { mdsvex } = require('mdsvex');

module.exports = {
  extensions: ['svelte', 'svx'],
  preprocess: mdsvex({
    extension: '.svx',
    layout: Path.resolve(__dirname, './Layout.svelte'),
    layoutRoot: __dirname,
  }),
};
