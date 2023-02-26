import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/SideBar/Sidebar";
import RelativedMovie from "./RelatedMovie";

function MoviePage(){
    const [movieDetail, setMovieDetail] = useState(false)
    const {id} = useParams()
    const imagePath = ""

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
        .then((res, req) => res.json())
        .then(data => setMovieDetail(data))

        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`)
        .then((res, req) => res.json())
        .then(data => console.log(data))
    }, [])

    function getDuration(duration){
        const minute = duration % 60
        const hour = (duration - minute ) / 60

        return `${hour} ${hour == 1 ? "hour" : "hours"}, ${minute} ${minute <= 1 ? "minute" : "minutes"}`
    }

    return (
        <div className="flex">
            <Sidebar />
            <main className="bg-primary-dark w-full md:w-3/5 text-white overflow-y-scroll h-screen scroll">
                <Header />
                <section className="">
                    <div className="relative">
                        <div className="absolute flex items-center justify-center w-full h-full bg-primary-dark/[0.6]">
                            <div className="w-24 h-16 rounded-3xl bg-primary-red/[0.4] flex items-center justify-center text-2xl hover:bg-primary-red z-10 hover:cursor-pointer">
                                <i className="fa-solid fa-play"></i>
                            </div>
                        </div>
                        <video className="w-full object-cover h-[144] sm:w-[512px] sm:h-[288px] md:w-[100%] mx-auto" poster={imagePath + movieDetail.backdrop_path }></video>
                    </div>
                    <article className="my-4 px-4 sm:px-6">
                        <h3 className="text-xl font-semibold flex mb-2">
                            <span>{movieDetail.title}</span>
                            <i className="fa-solid fa-share-nodes inline-block ml-auto text-primary-red"></i>
                            <i className="fa-regular fa-bookmark ml-4 text-primary-red"></i>
                        </h3>
                        <div className="flex items-center flex-wrap" >
                            <p className="text-sm mr-6 mb-2 md:mb-0">
                                <span className="text-primary-red mr-3">
                                    <i className="fa-regular fa-star-half-stroke mr-3"></i> 
                                    <span className="mr-3 text-lg font-medium">{movieDetail && movieDetail.vote_average.toFixed(2)} <span className="text-white/[0.8] text-sm mb-2">| {movieDetail.vote_count}</span></span> {'>'} 
                                </span>
                                {movieDetail && movieDetail.release_date.slice(0, 4)}
                            </p>
                            <button className="movie-tag">{movieDetail.adult ? 18 : 13}+</button>
                            <button className="movie-tag">{movieDetail && movieDetail.production_countries[0].name}</button>
                            <button className="movie-tag">Subtitle</button>
                        </div>
                        <p className="text-[0.85rem] leading-[1.3rem] py-4">{movieDetail.overview}</p>
                    </article>
                    <ul className="my-4 px-4 sm:px-6">
                        <li className="py-4 border-y border-y-white/[0.25]">Production Companies: <span className="text-primary-red ">{movieDetail && movieDetail.production_companies.map(item => <span key = {item.id}>{item.name}, </span>)}</span></li>
                        <li className="py-4 border-b border-b-white/[0.25]">Duration: <span className="text-primary-red">{getDuration(movieDetail.runtime)}</span></li>
                        <li className="py-4 border-b border-b-white/[0.25]">Genres: <span className="text-primary-red">{movieDetail && movieDetail.genres.map(item => <span key = {item.id}>{item.name}, </span>)}</span></li>
                    </ul>
                </section>
            </main>
            <RelativedMovie />
        </div>
    )
}

export default MoviePage