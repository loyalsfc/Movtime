import { useEffect, useContext, useState } from "react"
import { useParams } from "react-router-dom"
import SideHeader from "../../components/SideItems/SideBarHeader"
import RelatedMovieItem from "./RelatedMovieItem"

function RelativedMovie(){
    const {id} = useParams()
    const [similarMovie, setSimilarMovie] = useState([])
    const key = import.meta.env.VITE_API_KEY
    const imagePath = 'https://image.tmdb.org/t/p/w500' 


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => setSimilarMovie(data.results))
    },[])

    const movies = similarMovie.map(item => {
        return(
            <RelatedMovieItem 
                key={item.id}
                imgSrc={imagePath + item.poster_path}
                title={item.title}
                id={item.id}
            />
        )
    })

    return (
        <aside className="scroll hidden lg:block py-6 px-8 bg-secondary-dark w-1/4 shrink-0 h-screen overflow-y-scroll">
            <SideHeader />
            <main className="grid grid-cols-2 gap-4 flex-wrap">
                <h3 className="text-white text-lg col-span-2">Related Movies</h3>
                {movies}
            </main>
        </aside>
    )
}

export default RelativedMovie