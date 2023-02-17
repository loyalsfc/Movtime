import { createContext } from "react";

const Context = createContext()

function ContextProvider({children}){
    const key = import.meta.env.VITE_API_KEY
    const imagePath = 'https://image.tmdb.org/t/p/w500' 

    return(
        <Context.Provider value = {{key, imagePath}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}