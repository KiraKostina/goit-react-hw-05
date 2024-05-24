import { Link, useLocation } from 'react-router-dom';
export default function MovieList({ movies }) {
  const location = useLocation();
  // console.log(location);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <h3>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
