
function Trending(){
    return(
        <div className="w-[16.875rem] h-[13.18rem] p-3 shrink-0 text-white flex items-end rounded bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5cA_VU2_K94EYHQU1tOwY8sQ8AZWojhZuQQ&usqp=CAU')] bg-no-repeat bg-cover bg-center">
            {/* <img className="h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5cA_VU2_K94EYHQU1tOwY8sQ8AZWojhZuQQ&usqp=CAU "/> */}
            <div className="pt-5 pb-3 px-3 w-full  rounded-xl backdrop-blur-2xl">
                <h5 className="font-semibold mb-2">Thor: Love and Thunder</h5>
                <p className="text-xs flex items-center">2022  <span className="bg-white inline-block h-1 w-1 rounded-full mx-1 "></span> Action </p>
            </div>
        </div>
    )
}
export default Trending