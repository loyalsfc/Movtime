import { useState } from "react"
import image from "../../assets/image.png"
import Google from "../../assets/Google.png"
import WelcomeNote from "./WelcomeNote"
import { Link } from "react-router-dom"

function Register(){
    const [formData, setFormData] = useState({name: "", email: "", password: ""})

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div className="flex bg-primary-dark justify-between">
            <div className="h-screen w-full hidden sm:block ">
                <img src={image} alt="" className="h-full w-full" />
            </div>
            <div className="login-page">
                <WelcomeNote 
                    title="Create an account"
                    subtitle="Let’s get started with your 30 days free trial"
                />
                <form className="md:px-[90px]" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        id="name"
                        value={formData.name}
                        onChange={handleChange} 
                        placeholder="Name"
                        className="input-item"
                    />
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
                    <button className="btn-auth">Create account</button>
                    <button className="google-login mt-8"> 
                        <img src={Google} className="mr-3"/>
                        <span className="">Sign up with Google</span>
                    </button>
                </form>
                <p className="text-sm text-[#BABABA]/[0.85] text-center mt-9">Already have an account ? <Link to="/login"> <span className="text-[#FEFEFE]">Log in</span></Link></p>
            </div>
        </div>
    )
}

export default Register