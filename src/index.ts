import config from 'config';
import "reflect-metadata";
import http from 'http';
import { createDataBaseConnection, consoleLogger } from './helper';
import { app } from './routes';

let server:Record<any,any> = new http.Server(app);

const startServer = async () => {

  try {

    // Database Connection

    consoleLogger.info('Todo-app Server is running');

    await createDataBaseConnection();

  } catch (error) {

    consoleLogger.error('startServer:: Database Connection Error', error);

    process.exit(1);

  }

  /* Start the Server */
  const apiServer = server.listen(config.get('port'), (err: Object) => {

    if (err) {

      return consoleLogger.error('ERR:: launching server ', err);

    }

    consoleLogger.success(`API server is live at ${config.get('protocol')}://${config.get('host')}:${config.get('port')}`);

  });

  apiServer.timeout = 4 * 60 * 1000;

  const keepAliveTimeout = 660000;
  const headersTimeout = +keepAliveTimeout + (60 * 1000); // headers timeout should be > than keepAliveTimeout due to regression bug in Node 8+

  apiServer.keepAliveTimeout = keepAliveTimeout;
  apiServer.headersTimeout = headersTimeout;

  consoleLogger.info('Server KeepAliveTimeout:', keepAliveTimeout, 'headersTimeout:', headersTimeout);

};

process.on('uncaughtException', (err) => {

    consoleLogger.error('Uncaught Exception thrown', err);

});

process.on('unhandledRejection', (reason: any, p) => {

    consoleLogger.error('Unhandled Rejection at: Promise', p, 'reason:', reason);

});

let lastMesmoryUsage = { rss: 0 };

const factor = 1048576;

const printMemInfo = () => {

  try {

    const memoryUsage = process.memoryUsage();

    memoryUsage.rss /= factor;

    const memDiff = Math.abs(lastMesmoryUsage.rss - memoryUsage.rss);

    if (memDiff > 10) {

      memoryUsage.heapTotal /= factor;

      memoryUsage.heapUsed /= factor;

      lastMesmoryUsage = memoryUsage;

      consoleLogger.important(`Memory usage RSS: ${memoryUsage.rss}, heapTotal: ${memoryUsage.heapTotal}, heapUsed: ${memoryUsage.heapUsed}`);

    }

  } catch (err) {

    consoleLogger.error('Unable to fetch memeory usage information:', err);

  }

};

// Start API Server
startServer();

setInterval(printMemInfo, 10 * 1000);

setInterval(() => {

  try {

    consoleLogger.info('Todo-app Server is live and running', process.uptime());

  } catch (err) {

    consoleLogger.error('Error while checking Todo-app Server process liveness', err);

  }

}, 1000);

export { server };

const stop = () => { server.close(); }

export { stop };
