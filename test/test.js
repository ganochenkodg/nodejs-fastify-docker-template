import test from 'ava';
import { app } from './../index.js';

test('check /', async t => {
  const response = await app.inject({
    method: 'GET',
    url: '/'
  });

  t.is(response.statusCode, 200);
  t.deepEqual(response.body, 'Hello!');
})

test('check /healthz', async t => {
  const response = await app.inject({
    method: 'GET',
    url: '/healthz'
  });

  t.is(response.statusCode, 200);
  t.deepEqual(response.body, 'OK');
})
