import MovieTitle from "../Home/MovieTitle"

function RelatedMovieItem({imgSrc, title}){
    return (
        <div className="truncate">
            <div className="h-40 mb-2 rounded">
                <img className="w-full h-full" src={imgSrc} />
            </div>
            <MovieTitle title={title} label='Adventure, comedy' />
        </div>
    )
}

export default RelatedMovieItem