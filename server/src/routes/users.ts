import { getUser, getUserById } from "../controllers/userController";
import { t } from "../trpc";

export const userRouter = t.router({
  getUser,
  getUserById,
});