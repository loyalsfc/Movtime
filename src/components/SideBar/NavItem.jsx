
function NavItem({name, icon, bold}){
    return <li className={`relative pl-3 lg:pl-9 mb-8 ${bold} text-sm`}>
                <i className={`${icon} mr-4`}></i> <span className="hidden md:inline">{name}</span>
            </li>
}

export default NavItem