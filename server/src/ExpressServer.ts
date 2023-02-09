import { createExpressMiddleware } from '@trpc/server/adapters/express';
import cors from 'cors';
import express, { Application } from 'express';
import dotenv from 'dotenv';
import { appRouter } from './AppRouter';

export class ExpressApplication {
  public constructor() {
    this.app = express();
    this.setMiddleware();
    this.setRoutes();
  }

  private app: Application;

  private setMiddleware(): void {
    dotenv.config();
    this.app.use(cors({ origin: 'http://localhost:3000' }));
    this.app.set('port', process.env.APP_PORT);
  }

  private setRoutes(): void {
    this.app.use('/trpc', createExpressMiddleware({ router: appRouter, }));
  }

  public start(): void {
    this.app.listen(this.app.get('port'), (): void => console.log(`Server Listening on Port ${this.app.get('port')}`));
  }
}