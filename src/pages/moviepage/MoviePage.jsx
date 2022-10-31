import { useEffect, Context, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/SideBar/Sidebar";
import RelativedMovie from "./RelatedMovie";

function MoviePage(){
    const [movieDetail, setMovieDetail] = useState({})
    const {id} = useParams()
    useState

    console.log(id)
    useEffect(()=>{
        // fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ac9b441e9078e7b82089a236ca889b53&language=en-US`)
        // .then((res, req) => res.json())
        // .then(data => console.log(data))
    }, [])

    return (
        <div className="flex">
            <Sidebar />
            <main className="bg-primary-dark w-full md:w-3/5 text-white overflow-y-scroll h-screen scroll">
                <Header />
                <section className="">
                    <div className="relative">
                        <div className="absolute flex items-center justify-center w-full h-full bg-primary-dark/[0.6]">
                            <svg width="97" height="62" viewBox="0 0 97 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="97" height="62" rx="16" fill="#373737" fill-opacity="0.8"/>
                                <path d="M66 30.5L39.75 45.6554V15.3446L66 30.5Z" fill="white"/>
                            </svg>
                        </div>
                        <video className="w-full object-cover h-[144] sm:w-[512px] sm:h-[288px] md:w-[100%] mx-auto" poster="data:image/jpeg;base64,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"></video>
                    </div>
                    <article className="my-4 px-4 sm:px-6">
                        <h3 className="text-xl font-semibold flex mb-2">
                            <span>Avater: The Way of Water</span>
                            <i className="fa-solid fa-share-nodes inline-block ml-auto text-primary-red"></i>
                            <i className="fa-regular fa-bookmark ml-4 text-primary-red"></i>
                        </h3>
                        <div className="flex items-center" >
                            <p className="text-sm mr-6">
                                <span className="text-primary-red mr-3">
                                    <i className="fa-regular fa-star-half-stroke mr-3"></i> 
                                    <span className="mr-3 text-lg font-medium">7.9 <span className="text-white/[0.8] text-sm">| 380k</span></span> {'>'} 
                                </span>
                                2022
                            </p>
                            <button className="movie-tag">13+</button>
                            <button className="movie-tag">United State</button>
                            <button className="movie-tag">Subtitle</button>
                        </div>
                        <p className="text-[0.85rem] leading-[1.3rem] py-4">After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.</p>
                    </article>
                    <ul className="my-4 px-4 sm:px-6">
                        <li className="py-4 border-y border-y-white/[0.25]">Director: <span className="text-primary-red">Joseph Kosinski</span></li>
                        <li className="py-4 border-b border-b-white/[0.25]">Writers: <span className="text-primary-red">Jim Cash, Jack Epps Jr,  Peter Craig</span></li>
                        <li className="py-4 border-b border-b-white/[0.25]">Stars: <span className="text-primary-red"> Tom Cruise, Jennifer Connelly, Miles Teller</span></li>
                    </ul>
                </section>
            </main>
            <RelativedMovie />
        </div>
    )
}

export default MoviePage