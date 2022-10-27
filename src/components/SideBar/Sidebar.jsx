import Logo from '../../assets/movtimelogo.svg'
import NavItem from './NavItem'


function Sidebar(){
    return(
        <aside className='scroll bg-secondary-dark text-white/[0.80] py-5 overflow-y-scroll h-screen w-12 text-center md:text-left md:w-1/5 shrink-0'>
            <div className='flex items-center md:pl-3 lg:pl-9 mb-12'>
                <img src={Logo} className="h-8 mx-auto md:mx-0 md:mr-4"/>
                <h3 className='text-xl hidden md:block text-white font-medium'>MOV<span className='text-secondary-red'>TIME</span></h3>
            </div>
            <nav>
                <h4 className='nav-title'>MENU</h4>
                <ul>
                    <NavItem name="Browse" icon="fa-brands fa-bandcamp" bold="font-medium active"/>
                    <NavItem name="Watchlist" icon="fa-solid fa-clapperboard" />
                    <NavItem name="Coming Soon" icon="fa-solid fa-calendar" />                    
                </ul>
                <h4 className='nav-title mt-10'>SOCIAL</h4>
                <ul>
                    <NavItem name="Friend" icon="fa-solid fa-user-group" />
                    <NavItem name="Parties" icon="fa-solid fa-users" />                    
                </ul>
                <h4 className='nav-title mt-10'>PROFILE</h4>
                <ul>
                    <NavItem name="Settings" icon="fa-solid fa-gear" />
                    <NavItem name="Logout" icon="fa-solid fa-right-from-bracket" />                    
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar