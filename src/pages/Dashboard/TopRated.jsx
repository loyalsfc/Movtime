import { Link } from "react-router-dom"
import MovieTitle from "./MovieTitle"

function TopRated({imgSrc, title, id}){
    return(
        <Link to={`/movie/${id}`}>
            <div className="w-36 shrink-0">
                <div className="h-[185px] mb-2 rounded overflow-hidden">
                    <img className="w-full h-full" src={imgSrc} />
                </div>
                <MovieTitle title={title} label='Adventure, comedy' />
            </div>
        </Link>
    )
}

export default TopRated