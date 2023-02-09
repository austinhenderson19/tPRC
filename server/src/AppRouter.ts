import { userRouter } from "./routes/users";
import { t } from "./trpc";

export const appRouter = t.router({
  users: userRouter,
});

export type AppRouter = typeof appRouter;