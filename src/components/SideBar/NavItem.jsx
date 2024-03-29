
function NavItem({name, icon, bold}){
    return <div className={`relative pl-3 lg:pl-9 mb-8 ${bold} text-sm cursor-pointer`}>
                <i className={`${icon} mr-4`}></i> <span className="hidden md:inline">{name}</span>
            </div>
}

export default NavItem