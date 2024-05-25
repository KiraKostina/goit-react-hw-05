import MovieList from "../../components/MovieList/MovieList";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getMovies } from '../../movies-api';
import Loader from "../../components/Loader/Loader";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  
 
  useEffect(() => {
      const query = searchParams.get('query') ?? '';
    if (query.trim() === "") { return };
    async function fetchMovies() {
      try {
          setIsLoading(true);
          setIsError(false);
          const data = await getMovies(query);
          setMovies(data.results);
      } catch {
          setIsError(true);
      } finally {
          setIsLoading(false);
      }
    }

    fetchMovies();
    }, [searchParams]);
  
  const handleSubmit = async value => {
    setSearchParams({ query: value });
  };

  return (
    <div>
            <SearchBar onSearch={handleSubmit} />
      {isError && <ErrorMessage />}
      {!isLoading && !isError && <MovieList movies={movies} />}
      {isLoading && <Loader />}
      
    </div>
  );
}
