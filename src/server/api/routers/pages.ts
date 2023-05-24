import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { getPageById, getPages, updatePage, getIdFromSlug } from "@/utils/pb";

export const pagesRouter = createTRPCRouter({
  getPage: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      return {
        data: getPageById(input.id),
      };
    }),
  getPages: publicProcedure
    .query(() => {
      return {
        data: getPages(),
      };
    }),
  updatePage: publicProcedure
    .input(z.object({ slug: z.string(), title: z.string().optional(), content: z.any().optional() }))
    .mutation(async ({ input }) => {
      const id = await getIdFromSlug(input.slug);
      if (!id || id.error || !id.data) {
        return {
          error: {
            code: "NOT_FOUND",
            message: "Page not found",
          },
        };
      }
      let data = {};
      if (input.title) {
        data = { ...data, title: input.title };
      }
      if (input.content) {
        data = { ...data, content: input.content };
      }
      const res = await updatePage(id.data, data);
      return {
        data: res,
      };
    }),
});
