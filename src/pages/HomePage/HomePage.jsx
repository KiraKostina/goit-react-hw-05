import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getTrendingMovies } from '../../movies-api';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
          setIsLoading(true);
          setIsError(false);
          const data = await getTrendingMovies();
          setTrendingMovies(data.results);
      } catch {
          setIsError(true);
      } finally {
          setIsLoading(false);
      }
    }

    fetchTrendMovies();
  }, [setTrendingMovies]);

  return (
    <div>
          <h2>Trending today</h2>
          {isLoading && <Loader /> }
          {isError && <ErrorMessage />}
          <MovieList movies={trendingMovies} />
    </div>
  );
}
