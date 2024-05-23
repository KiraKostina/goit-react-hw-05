import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getMovieById } from '../../movies-api';
// import MovieInfo from '../../components/MovieInfo/MovieInfo';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";



export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    async function fetchMovieById() { 
      try {
        setIsLoading(true);
          setIsError(false);
        const data = await getMovieById(movieId);
        setMovie(data);
        
      } catch (error) {
         setIsError(true);
      }
      finally { 
         setIsLoading(false);
      }
    }
    fetchMovieById();

  }, [movieId])


  return (
    <div>
      {/* <h2>MovieDetailsPage</h2> */}
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {movie &&(
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      )}

    </div>
  );
}