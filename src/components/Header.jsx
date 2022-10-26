
function Header(){
    function toggleMenu(){
        document.querySelector('.mobile-nav').classList.toggle('scale-0')
    }

    return(
        <header className="py-6 px-2 md:px-6 relative">
            <nav className="hidden md:block">
                <NavItem display='inline-block'/>
            </nav>
            <button className="block md:hidden text-lg ml-auto" onClick={toggleMenu}>
                <i className="fa-solid fa-bars text-white"></i>
            </button>
            <div className="mobile-nav bg-primary-dark transition-all scale-0 left-0 p-4 absolute w-full md:hidden">
                <NavItem display='my-8'/>
            </div>
        </header>
    )
}

function NavItem({display}){
    return(
        <ul className="text-white/[0.8]">
            <li className={`${display} mx-3 text-white`}>Movies</li>
            <li className={`${display} mx-3`}>Sports</li>
            <li className={`${display} mx-3`}>TV Series</li>
            <li className={`${display} mx-3`}>Kids</li>
            <li className={`${display} mx-3`}>More <i className="fa-solid fa-caret-down"></i></li>
        </ul>
    )
}

export default Header