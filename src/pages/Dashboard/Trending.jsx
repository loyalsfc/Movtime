import { Link } from "react-router-dom"

function Trending({title, year, label, imgUrl, id}){
    return(
        <Link to={`/movie/${id}`}>
            <div 
                className='relative w-[16.875rem] h-[13.18rem] p-3 shrink-0 text-white flex items-end rounded bg-no-repeat bg-cover bg-center'        >
                <img className="absolute h-full w-full top-0 left-0" src={imgUrl}/>
                <div className="pt-5 pb-3 px-3 w-full  rounded-xl backdrop-blur-2xl">
                    <h5 className="font-semibold mb-2">{title}</h5>
                    <p className="text-xs flex items-center">{year}  <span className="bg-white inline-block h-1 w-1 rounded-full mx-1 "></span> {label} </p>
                </div>
            </div>
        </Link>
    )
}
export default Trending