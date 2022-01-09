import fastify from 'fastify';
import metrics from 'fastify-metrics';
import { port, host } from './config.js';
import gracefulShutdown from 'fastify-graceful-shutdown';

export const app = fastify({ logger: true });
app.register(metrics, {
  endpoint: '/metrics',
});
app.register(gracefulShutdown);

app.get('/', async (req, res) => {
  res.send('Hello!');
});
app.get('/healthz', async (req, res) => {
  res.send('OK');
});

app.listen(port, host, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});

