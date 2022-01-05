import { Request, Response, NextFunction } from 'express';

export class RequestParser {
    
    static parseRequest(req: Request, res: Response, next: NextFunction) {
  
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Referer');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  
    res.header('Access-Control-Allow-Origin', '*');
  
    if (req.method === 'OPTIONS') {
  
      return res.sendStatus(200);
  
    }
  
    next();
  
  }

}
