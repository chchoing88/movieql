export let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1,
  },
  {
    id: 1,
    name: "Star Wars - The new one1",
    score: 8,
  },
  {
    id: 2,
    name: "Star Wars - The new one2",
    score: 99,
  },
  {
    id: 3,
    name: "Star Wars - The new one3",
    score: 2,
  },
];

// 어떤 Database든 가져다 쓸 수 있다.

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => id === movie.id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  }

  return false;
};

export const addMovie = (name, score) => {
  const newMoive = {
    id: movies.length + 1,
    name,
    score,
  };
  movies.push(newMoive);
  return newMoive;
};
