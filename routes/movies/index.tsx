import { PageProps, HandlerContext } from "$fresh/server.ts";
import { MovieLink } from "../../components/MovieLink.tsx";
import { getAllMovies, Movie } from "../../data/movies.ts";
import Layout from "../../layouts/Layout.tsx";

type Movies = Awaited<ReturnType<typeof getAllMovies>>;

export const handler = {
  async GET(_req: Request, ctx: HandlerContext) {
    const movies = await getAllMovies();

    return ctx.render(movies);
  },
};

export default function MoviesPage(props: PageProps<Movies>) {
  const { data: movies } = props;

  return (
    <Layout title="Movies">
      <h1>Movies</h1>
      <ul class="movie-list">
        {Array.from(movies).map(([id, { name }]) => (
          <li key={id}>
            <MovieLink id={id} name={name} />
          </li>
        ))}
      </ul>
      <p>
        <a href="/rate-a-movie">Rate a movie</a>
      </p>
    </Layout>
  );
}
