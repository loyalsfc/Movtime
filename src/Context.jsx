import { createContext } from "react";

const Context = createContext()

function ContextProvider({children}){
    const key = 'ac9b441e9078e7b82089a236ca889b53'
    const imagePath = 'https://image.tmdb.org/t/p/w500' 

    return(
        <Context.Provider value = {{key, imagePath}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}