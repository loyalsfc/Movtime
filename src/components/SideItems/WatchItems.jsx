import MovieTitle from "../../pages/Home/MovieTitle";

function WatchItem({imgsrc, title, label}){
    return(
        <div className="mb-4 flex items-center" >
            <div className="h-[92px] mr-4">
                <img src={imgsrc} className="w-[4.5rem] h-full rounded" />
            </div>
            <MovieTitle title={title} label={label}/>
        </div>
    )
}

export default WatchItem