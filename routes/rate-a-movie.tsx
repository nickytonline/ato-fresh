import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { MovieLink } from "../components/MovieLink.tsx";
import { Stars } from "../components/Stars.tsx";
import { Movie, getAllMovies, addMovie } from "../data/movies.ts";
import Layout from "../layouts/Layout.tsx";

export const handler: Handlers<Map<string, Movie>> = {
  async GET(_req: Request, ctx: HandlerContext<Map<string, Movie>>) {
    // Simulate fetching data from a database

    return ctx.render(await getAllMovies());
  },

  async POST(req: Request, ctx: HandlerContext<Map<string, Movie>>) {
    // Simulate adding data from a database
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const stars = Number(formData.get("stars"));
    addMovie({ name, stars });

    return ctx.render(await getAllMovies());
  },
};

export default function RateAMovie(props: PageProps<Map<string, Movie>>) {
  return (
    <Layout title="Movies">
      <h1>Rate a movie</h1>
      <form name="movie-rating" method="POST">
        <label>
          movie name
          <input type="text" name="name" required />
        </label>
        <label>
          star rating
          <input type="number" name="stars" required min={1} max={5} />
        </label>
        <button>Submit</button>
      </form>
      <h2>Movies already rated</h2>
      <ul class="movie-list">
        {[...props.data.entries()].map(([id, { name, stars }]) => (
          <li key={name}>
            <MovieLink id={id} name={name} /> <Stars rating={stars} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
