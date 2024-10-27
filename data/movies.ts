export type Movie = {
  name: string;
  stars: number;
};

let id = 1;
const seedData = {
  [id++]: { name: "Top Gun: Maverick", stars: 4 },
  [id++]: {
    name: "Teenage Mutant Ninja Turtles II: The Secret of the Ooze",
    stars: 2,
  },
  [id++]: { name: "Everything Everywhere All at Once", stars: 5 },
};

// In memory database
const movies = new Map<string, Movie>(Object.entries(seedData));

export function addMovie(movie: Movie) {
  movies.set((id++).toString(), movie);

  // Simulating going to a datastore so creating a Promise even though it's unnecessary
  return Promise.resolve(movie);
}

export function getAllMovies() {
  // Simulating going to a datastore so creating a Promise even though it's unnecessary
  return Promise.resolve(movies);
}

export function getMovie(id: string) {
  // Simulating going to a datastore so creating a Promise even though it's unnecessary
  if (!movies.has(id)) {
    return Promise.resolve();
  }

  return Promise.resolve(movies.get(id));
}
