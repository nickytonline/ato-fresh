// Learn more about dynamic routes: https://fresh.deno.dev/docs/getting-started/dynamic-routes
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { Stars } from "../../components/Stars.tsx";
import Layout from "../../layouts/Layout.tsx";
import { getMovie, Movie } from "../../data/movies.ts";

export const handler = {
  async GET(_req: Request, ctx: HandlerContext) {
    const movie = await getMovie(ctx.params.id);

    if (!movie) {
      return ctx.renderNotFound();
    }

    return ctx.render(movie);
  },
};

export default function MoviePage(props: PageProps<Movie>) {
  const { name, stars } = props.data;

  return (
    <Layout title={name}>
      <h1>{name}</h1>
      <p>
        Rating: <Stars rating={stars} />
      </p>
      <p>
        See <a href={`/movies/${props.params.id}/comments`}>Comments</a>
      </p>
    </Layout>
  );
}
