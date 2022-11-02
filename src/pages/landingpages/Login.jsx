import { useState } from "react"
import WelcomeNote from "./WelcomeNote"
import Google from "../../assets/Google.png"
import { Link } from "react-router-dom"
import image from "../../assets/image2.png"

function Login(){

    const [formData, setFormData] = useState({email: "", password: "", rememberSign: false})

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="flex bg-primary-dark justify-between">
            
            <div className="login-page">
                <WelcomeNote 
                    title="Welcome back"
                    subtitle = "Welcome back! Please enter your details."
                />
                <div className='px-[90px]'>
                    <button className="google-login">
                        <img src={Google} className="mr-3" />
                        <span>Log in with Google</span>
                    </button>
                </div>
                <div className="flex items-center my-11 md:px-[90px]">
                    <div className="w-full h-[1px] bg-[#4D4B4B]"></div>
                    <div className="mx-9">or</div>
                    <div className="w-full h-[1px] bg-[#4D4B4B]"></div>
                </div>
                <form onSubmit={handleSubmit} className="md:px-[90px]">
                    <input 
                        type="email" 
                        id="email"
                        value={formData.email}
                        onChange={handleChange} 
                        placeholder="Email"
                        className="input-item"
                    />
                    <input 
                        type="password" 
                        id="password"
                        value={formData.password}
                        onChange={handleChange} 
                        placeholder="Password"
                        className="input-item mb-0"
                    />
                    <div className="text-sm flex justify-between items-center mt-6 ">
                        <p className="">
                            <input
                                className="accent-[#4D4B4B]"
                                name="isGoing"
                                type="checkbox"
                                checked={formData.rememberSign}
                                onChange={handleChange} 
                            />
                            <span className="ml-3 text-[#FEFEFE]/[0.5]">Remember me for 30 days</span>
                        </p>
                        <span className="underline text-[#FEFEFE]">Forgot password</span>
                    </div>
                    <button className="btn-auth">Log in</button>
                </form>
                <p className="text-sm text-[#BABABA]/[0.85] text-center mt-9">Don't have an account? <Link to="/register"> <span className="text-[#FEFEFE]">Sign up for free</span></Link></p>
            </div>
            <div className="h-screen w-full hidden sm:block">
                <img src={image} alt="Banner image" className="h-full w-full"/>
            </div>
        </div>
    )
}

export default Login 