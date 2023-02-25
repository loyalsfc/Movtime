import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../../assets/movtimelogo.svg'
import NavItem from './NavItem'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../../firebase';

function Sidebar(){
    const activeClassName = "font-medium active"
    const navigate = useNavigate()

    const logout = () => {
        signOut(auth).then(() => {
            navigate('/')        
        }).catch((error) => {
        // An error happened.
        });
    }

    return(
        <aside className='scroll bg-secondary-dark text-white/[0.80] py-5 overflow-y-scroll h-screen w-12 text-center md:text-left md:w-1/5 shrink-0'>
            <div className='md:pl-3 lg:pl-9 mb-12'>
                <Link to="/" className='flex items-center'>
                    <img src={Logo} className="h-8 mx-auto md:mx-0 md:mr-4"/>
                    <h3 className='text-xl hidden md:block text-white font-medium'>MOV<span className='text-secondary-red'>TIME</span></h3>
                </Link>
            </div>
            <nav>
                <h4 className='nav-title'>MENU</h4>
                <ul>
                    <NavLink
                        to="/"
                        className={({isActive}) => 
                            isActive ? activeClassName : undefined
                        }
                    >
                        <NavItem name="Browse" icon="fa-brands fa-bandcamp"/>
                    </NavLink>
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
                    <li>
                        <NavItem name="Settings" icon="fa-solid fa-gear" />
                    </li>
                    <li onClick={logout}>
                        <NavItem name="Logout" icon="fa-solid fa-right-from-bracket" />
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar