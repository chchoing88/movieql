import { movies, getById, getMovies, deleteMovie, addMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, args) => {
      console.log(args); // { id: 1}
      return getById(args.id);
    }, //getById(id), // _ 는 보내는 Object?
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
  },
};

export default resolvers;

// {
//   people {
//     id
//     name
//     age
//   }
//   person(id:1){
//     name
//   }
// }
