import { useSelector } from "react-redux"

function SideHeader(){
    const {user} = useSelector(state => state.user)
    console.log(user)
    return (
        <header className="flex items-center text-white mb-6" >
            <div className="mr-7 relative">
                <i className="fa-solid fa-bell"></i>
                <span className="h-2 w-2 absolute border border-secondary-dark top-0 right-0 rounded-full bg-primary-red block"></span>
            </div>
            <div className="flex items-center">
                <div className="h-9 w-9 rounded-full overflow-hidden inline-block mr-2">
                    <img src={user?.photoURL ? user?.photoURL : "https://static.vecteezy.com/system/resources/previews/004/991/321/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"} alt="" />
                </div>
                <span className="text-sm">{user?.name}</span>
            </div>
        </header>
    )
}

export default SideHeader