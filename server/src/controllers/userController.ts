import { z } from "zod";
import { t } from "../trpc";

const users = [
  {
    id: '1',
    name: 'Austin Henderson',
  },
  {
    id: '2',
    name: 'Bret McGee',
  },
  {
    id: '3',
    name: 'Calvin Star',
  },
];

export const getUser = t.procedure.query(() => {
  return {
    id: 123,
    name: 'Austin',
  }
});

export const getUserById = t.procedure.input(z.object({ id: z.string() })).query(({ input }) => {
  const user = users.find(el => el.id === input.id);

  if (!user) {
    return null;
  }

  return user;
});