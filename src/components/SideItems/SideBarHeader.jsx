
function SideHeader(){
    return (
        <header className="flex items-center text-white mb-6" >
            <div className="mr-7 relative">
                <i className="fa-solid fa-bell"></i>
                <span className="h-2 w-2 absolute border border-secondary-dark top-0 right-0 rounded-full bg-primary-red block"></span>
            </div>
            <div className="flex items-center">
                <div className="h-9 w-9 rounded-full overflow-hidden inline-block mr-2">
                    <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <span className="text-sm">James Maddison</span>
            </div>
        </header>
    )
}

export default SideHeader