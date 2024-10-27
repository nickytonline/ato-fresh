// Learn more about middleware: https://fresh.deno.dev/docs/concepts/middleware
import { FreshContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  request: Request,
  ctx: FreshContext<State>
) {
  const response = await ctx.next();
  response.headers.set("x-fresh", "true");

  if (request.url.includes("joke-of-the-day")) {
    response.headers.set("x-joke-page", "true");
  }

  if (request.url.includes("movie/")) {
    response.headers.set("x-movie-page", "true");
  }

  return response;
}
