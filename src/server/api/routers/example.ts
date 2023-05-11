import { z } from "zod";
import { env } from "@/env/server.mjs";

import { createTRPCRouter, publicProcedure } from "../trpc";

import  PocketBase from "pocketbase";
const pb = new PocketBase(env.PB_API);

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  pbPages: publicProcedure
    .query(async () => {
      return await pb.collection("pages").getFullList();
    }),
});
