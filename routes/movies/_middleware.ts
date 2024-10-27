// Learn more about middleware: https://fresh.deno.dev/docs/concepts/middleware
import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  _request: Request,
  ctx: MiddlewareHandlerContext<State>
) {
  const response = await ctx.next();

  response.headers.set("x-movie-page", "true");
  // Cache movie pages for 60 seconds
  response.headers.set("Cache-Control", "public, max-age=60, s-max-age=60");

  return response;
}
