import SideHeader from "../../components/SideItems/SideBarHeader"
import TopRated from "../Home/TopRated"
import RelatedMovieItem from "./RelatedMovieItem"

function RelativedMovie(){
    return (
        <aside className="scroll hidden lg:block py-6 px-8 bg-secondary-dark w-1/4 shrink-0 h-screen overflow-y-scroll">
            <SideHeader />
            <main className="grid grid-cols-2 gap-4 flex-wrap">
                <h3 className="text-white text-lg col-span-2">Related Movies</h3>
                <RelatedMovieItem 
                    imgSrc='https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg'
                    title='Sonic the Hedgog'
                />
                <RelatedMovieItem 
                    imgSrc='https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg'
                    title='Sonic the Hedgog'
                />
                <RelatedMovieItem 
                    imgSrc='https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg'
                    title='Sonic the Hedgog'
                />
                <RelatedMovieItem 
                    imgSrc='https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg'
                    title='Sonic the Hedgog'
                />
            </main>
        </aside>
    )
}

export default RelativedMovie