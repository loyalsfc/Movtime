import { useState } from "react"
import image from "../../assets/image.png"
import WelcomeNote from "./WelcomeNote"
import { Link } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {auth} from "../../firebase"
import GoogleLogin from "./GoogleLogin" 
import { setUser } from "../../features/userSlice";


function Register(){
    const [formData, setFormData] = useState({displayName: "", email: "", password: ""})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                // Signed in 
                updateProfile(auth.currentUser, {
                    displayName: formData.displayName
                }).then(()=>{
                    user = auth.currentUser;
                })
                // dispatch(setUser(user))
                // alert('Successfully created')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorCode)
            });
    }

    return(
        <div className="flex bg-primary-dark justify-between">
            <div className="h-screen w-3/5 hidden md:block shrink-0">
                <img src={image} alt="" className="h-full w-full" />
            </div>
            <div className="login-page w-full md:w-2/5 px-2 shrink-0">
                <WelcomeNote 
                    title="Create an account"
                    subtitle="Let’s get started with your 30 days free trial"
                />
                <form className="mx-auto w-[400px] max-w-full mb-8" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        id="displayName"
                        value={formData.displayName}
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
                </form>
                <GoogleLogin />
                <p className="text-sm text-[#BABABA]/[0.85] text-center mt-9">Already have an account ? <Link to="/login"> <span className="text-[#FEFEFE]">Log in</span></Link></p>
            </div>
        </div>
    )
}

export default Register