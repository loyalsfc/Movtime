
function MovieTitle({title, label}){
    return(
        <article className="text-white ">
            <h5 className="">{title}</h5>
            <p className="text-xs text-white/[0.7] mt-2">{label}</p>
        </article>
    )
}

export default MovieTitle