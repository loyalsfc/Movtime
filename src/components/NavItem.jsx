
function NavItem({name, icon, bold}){
    return <li className={`pl-2 mb-8 ${bold} text-sm`}><i className={`${icon} mr-4`}></i> {name}</li>
}

export default NavItem