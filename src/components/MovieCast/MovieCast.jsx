import { getCastById } from '../../movies-api';
// import MovieInfo from '../../components/MovieInfo/MovieInfo';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import {  useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';


export default function MovieCast()  {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const goBack = useRef(location?.state ?? '/movies');

  useEffect(() => {
    if (!movieId) return;

    async function fetchCastById() {
      try {
        setIsError(false);
        const data = await getCastById(movieId);
        setCast(data.cast);
      } catch (error) {
        setIsError(true);
      } 
    }
    fetchCastById();
  }, [movieId]);

  if (isError) {
    return <ErrorMessage />;
  }

  if (!cast) {
    return <Loader />;
  }

    return (
        <div>
        
        {isError && <ErrorMessage />}
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} width={150} />
              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
        </div>
    )
 }