import { ExpressApplication } from "./ExpressServer";

(function init() {
  const server: ExpressApplication = new ExpressApplication();
  server.start();
})();