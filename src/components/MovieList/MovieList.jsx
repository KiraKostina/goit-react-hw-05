import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();
  // console.log(location);

  return (
    <ul >
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink className={css.list} to={`/movies/${movie.id}`} state={location}>
            <h3>{movie.title}</h3>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
