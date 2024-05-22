export default function MovieList({movies}) {
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    {/* <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} /> */}
                    <h3>{movie.title}</h3>
                </li>
            ))}
        </ul>
    );

}