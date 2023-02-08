import { t } from "../trpc";

export const getUser = t.procedure.query(() => {
  return {
    id: 123,
    name: 'Austin',
  }
});

export const getUserById = t.procedure.query(() => {
  return {
    id: 123,
    name: 'Austin',
  }
});