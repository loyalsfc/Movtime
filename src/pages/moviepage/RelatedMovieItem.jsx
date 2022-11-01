import MovieTitle from "../Home/MovieTitle"
import { Link } from "react-router-dom"

function RelatedMovieItem({imgSrc, title, id}){
    return (
        <Link to={`/movie/${id}`}>
            <div className="truncate">
                <div className="h-40 mb-2 rounded">
                    <img className="w-full h-full" src={imgSrc} />
                </div>
                <MovieTitle title={title} label='Adventure, comedy' />
            </div>
        </Link>
    )
}

export default RelatedMovieItem