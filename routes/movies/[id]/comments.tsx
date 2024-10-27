import { PageProps, HandlerContext } from "$fresh/server.ts";
import { Stars } from "../../../components/Stars.tsx";
import { getMovie, Movie } from "../../../data/movies.ts";
import Layout from "../../../layouts/Layout.tsx";

const movieReviews = [
  { review: "Best movie ever!", author: "Wendy Williams" },
  { review: "It was OK.", author: "Jane Garcia" },
  { review: "I liked it.", author: "John Kim" },
  { review: "The main character was too complicated.", author: "Ronnie Patel" },
  { review: "I did not enjoy this film.", author: "John Nguyen" },
  {
    review: "A captivating and emotional story that left me in tears.",
    author: "Samantha Lee",
  },
  {
    review:
      "The cinematography was breathtaking, but the plot fell short for me.",
    author: "Alex Chen",
  },
  {
    review: "I couldn't stop laughing! This movie is hilarious.",
    author: "Megan Taylor",
  },
  {
    review:
      "The acting was fantastic, but the pacing was too slow for my taste.",
    author: "Ethan Park",
  },
  {
    review: "A heartwarming tale of friendship and perseverance.",
    author: "Julia Kim",
  },
  {
    review: "I was on the edge of my seat the entire time! So suspenseful.",
    author: "Andrew Chen",
  },
  {
    review: "An absolute masterpiece. I can't recommend it enough.",
    author: "Emily Nguyen",
  },
];

const selectedMovieReviews = movieReviews
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);

export const handler = {
  async GET(_req: Request, ctx: HandlerContext) {
    const movie = await getMovie(ctx.params.id);

    if (!movie) {
      return ctx.renderNotFound();
    }

    return ctx.render(movie);
  },
};

export default function MovieCommentsPage(props: PageProps<Movie>) {
  const { name, stars } = props.data;

  return (
    <Layout title={`Comments for the movie "${name}"`}>
      <h1>{name}</h1>
      <p>
        Rating: <Stars rating={stars} />
      </p>
      <h2>Comments</h2>
      <ul class="movie-list">
        {selectedMovieReviews.map((review) => (
          <li>
            {review.review} – {review.author}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
