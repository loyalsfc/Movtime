import Header from "../../components/Header"
import Label from "./Labels"
import TopRated from "./TopRated"
import Trending from "./Trending"

function Home(){
    const style = {
                    backgroundImage: "linear-gradient(135deg, rgba(25,24,23,0.95) 40%, rgba(0,0,0,0)), url('https://cdn.mos.cms.futurecdn.net/NJXQ8h3mUd9mhsh2m8xpba.jpg')",
                    
                }

    return(
        <main className="scroll bg-primary-dark w-[calc(100%-3rem)] md:w-4/5 lg:w-[55%] overflow-y-scroll h-screen shrink-0" >
            <section className="h-[450px] bg-center bg-cover bg-no-repeat" style={style}>
                <Header />
                <div className="mt-12 px-4 sm:px-6" >
                    <h2 className="text-2xl sm:text-[2rem] md:text-[2.5rem] sm:leading-[150%] font-semibold text-white max-w-[455px] mb-6">Doctor Strange in the Multiverse of Madness</h2>
                    <Label title='Action' />
                    <Label title='Adventure' />
                    <Label title='Fantasy' />
                    <button className="block bg-primary-red text-white py-3 px-10 mt-8 rounded-full">Watch <i className="fa-solid fa-circle-play ml-4"></i></button>
                </div>
            </section>
            <section className="p-6">
                <h3 className="text-white font-bold mb-3">Trending Movies</h3>
                <div className="movies-container">
                    <Trending />
                    <Trending />
                    <Trending />
                    <Trending />
                </div>
            </section>
            <section className="p-6">
                <h3 className="text-white font-bold mb-3">Top Rated Movies</h3>
                <div className="movies-container">
                    <TopRated />
                    <TopRated />
                    <TopRated />
                    <TopRated />
                    <TopRated />
                    <TopRated />
                    <TopRated />
                    <TopRated />
                    <TopRated />
                </div>
            </section>
        </main>
    )
}

export default Home