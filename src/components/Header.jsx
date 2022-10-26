
function Header(){
    return(
        <header className="py-6">
            <nav>
                <ul className="text-white/[0.8]">
                    <li className="inline-block mx-3 text-white">Movies</li>
                    <li className="inline-block mx-3">Sports</li>
                    <li className="inline-block mx-3">TV Series</li>
                    <li className="inline-block mx-3">Kids</li>
                    <li className="inline-block mx-3">More <i className="fa-solid fa-caret-down"></i></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header