import MovieTitle from "./MovieTitle"

function TopRated({imgSrc, title}){
    return(
        <div className="w-36 shrink-0">
            <div className="h-[185px] mb-2 rounded overflow-hidden">
                <img className="w-full h-full" src={imgSrc} />
            </div>
            <MovieTitle title={title} label='Adventure, comedy' />
        </div>
    )
}

export default TopRated