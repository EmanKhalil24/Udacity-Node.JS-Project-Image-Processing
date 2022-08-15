import express, { Request, Response, NextFunction } from 'express';

import routes from './routes';
import logger from './utilities/logger';

const app = express();
const PORT = 3000;

app.listen(PORT || 8000, () => {
   console.log(`App Run at http://localhost:${PORT || 8000}`);
});

app.use('', logger, routes);

app.use((request: Request, response: Response, next: NextFunction) => {
   response
      .status(404)
      .send('<h1 style="text-align: center; color:red;">Not Found URL</h1>');
});

app.use(
   (error: any, request: Request, response: Response, next: NextFunction) => {
      response.send(
         `<h1 style="text-align: center;color:red;">${error.message}</h1>`
      );
   }
);

export default app;
