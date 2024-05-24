

    import { getCastById } from '../../movies-api';
// import MovieInfo from '../../components/MovieInfo/MovieInfo';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import {  useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';


export default function MovieCast()  {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const goBack = useRef(location?.state ?? '/movies');

  useEffect(() => {
    if (!movieId) return;

    async function fetchCastById() {
      try {
        // setIsLoading(true);
        setIsError(false);
        const data = await getCastById(movieId);
        setMovie(data);
      } catch (error) {
        setIsError(true);
      } 
    }
    fetchCastById();
  }, [movieId]);


    return (
        <div>
        
      {isError && <ErrorMessage />}
            {/* {isLoading && <Loader />} */}
            <h3>Hello</h3>
        </div>
    )
 }