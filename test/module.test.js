const test = require('ava');
const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils');

let nuxt;

test.before(async () => {
  ({ nuxt } = await setup(loadConfig(__dirname, '../../example')));
}, 60000);

test.after(async () => {
  await nuxt.close();
});

test('module', async t => {
  const html = await get('/');

  t.assert(html.includes('Works!'));
});
