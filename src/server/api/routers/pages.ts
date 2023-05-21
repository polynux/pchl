import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { getPage, getPages } from "@/utils/pb";

export const pagesRouter = createTRPCRouter({
  getPage: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      return {
        data: getPage(input.id),
      };
    }),
  getPages: publicProcedure
    .query(() => {
      return {
        data: getPages(),
      };
    }),
});
