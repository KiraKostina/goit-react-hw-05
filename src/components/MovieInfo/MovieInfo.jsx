
export default function MovieInfo({ movie}) { 
    return (
        <div>
        <div key={movie.id}>
            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>
    </div>
        </div>
)
}