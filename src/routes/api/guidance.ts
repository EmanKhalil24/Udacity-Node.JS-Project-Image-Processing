import { Router, Request, Response, NextFunction } from 'express';

const guidance: Router = Router();

guidance.get('', (request: Request, response: Response, next: NextFunction) => {
   response.sendFile('/html/index.html', { root: __dirname });
});

export default guidance;
