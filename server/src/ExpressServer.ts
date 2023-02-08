import express, { Application } from 'express';
import dotenv from 'dotenv';

export class ExpressApplication {
  public constructor() {
    this.app = express();
    this.setMiddleware();
    this.setRoutes();
  }

  private app: Application;

  private setMiddleware(): void {
    dotenv.config();
    this.app.set('port', process.env.APP_PORT);
  }

  private setRoutes(): void {}

  public start(): void {
    this.app.listen(this.app.get('port'), (): void => console.log(`Server Listening on Port ${this.app.get('port')}`));
  }
}