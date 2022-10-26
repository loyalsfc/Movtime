
function NavItem({name, icon, bold}){
    return <li className={`pl-3 lg:pl-9 mb-8 ${bold} text-sm`}><i className={`${icon} mr-4`}></i> <spam className="hidden md:inline">{name}</spam></li>
}

export default NavItem