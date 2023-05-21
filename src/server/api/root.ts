import { createTRPCRouter } from "./trpc";
import { pagesRouter } from "./routers/pages";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  pages: pagesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
