// Routes
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import { todoItemRouter } from './todoitem.routes';
import { consoleLogger } from '../helper';
import { RequestParser } from '../middleware/requestParser';

// Configure Express App and Routes
const app = express();

// Configure body parser for POST requests
app.use(bodyParser.json({
  limit: '300mb'
}));

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '300mb',
  parameterLimit: 1000000
}));

// Disable express 'powered by' headers to make server framework anonymous
app.disable('x-powered-by');

// // compress all responses
app.use(compression());

// Parse request to handle OPTIONS requests, CORS
app.use(RequestParser.parseRequest);

// todo item APIs
app.use('/api/', todoItemRouter);

// 404
app.use((req: Request, res: Response) => {

    res.status(404).json({
      success: false,
      message: 'invalid API'
    });
  
  });
  
  // generic errors handling - 500.
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  
    if (!err) {
  
      res.status(500).json({
        success: false,
        message: 'Cannot fulfill the request',
        detail: 'internal server error'
      });
  
    }
  
    consoleLogger.error(err);
  
    return res.status(500).json({
      success: false,
      message: 'Cannot fulfill the request',
      detail: err.message || 'Unexpected Server Error'
    });
  
  });
  
  export {
      app
  }
