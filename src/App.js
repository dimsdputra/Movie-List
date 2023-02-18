import { useEffect, useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import { getMovieList, searchMovie } from "./utils/api";
import Avengers from "./assets/avengers.jpg";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((results) => {
      setPopularMovies(results);
    });
  }, []);

  const search = async (q) => {
    if (q.length >= 2) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  const PopularMovieList = () => {
    return popularMovies.map((movies, i) => {
      const image = movies.poster_path;
      return (
        <Card
          key={i}
          title={movies.title}
          voteAvg={movies.vote_average}
          releaseDate={movies.release_date}
          overview={movies.overview}
          img={
            image
              ? `${process.env.REACT_APP_BASEIMGURL}/${movies.poster_path}`
              : Avengers
          }
        />
      );
    });
  };

  return (
    <>
      <div className="flex items-center bg-zinc-300 px-10">
        <h1 className="text-zinc-700 font-bold text-4xl text-center font-sans">
          Movie List
        </h1>
        <Search search={search} />
      </div>
      <div className="w-full h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 box-border px-10 py-10 ">
        <PopularMovieList />
      </div>
    </>
  );
}

export default App;
