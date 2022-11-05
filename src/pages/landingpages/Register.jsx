import { useState } from "react"
import image from "../../assets/image.png"
import Google from "../../assets/Google.png"
import WelcomeNote from "./WelcomeNote"
import { Link } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

import app from "../../firebase"


function Register(){
    const [formData, setFormData] = useState({displayName: "", email: "", password: ""})

    const auth = getAuth(app);
    

    const handleChange = (e) => {
        console.log(e.target.value)
        setFormData({...formData, [e.target.id]: e.target.value})
    }


    const provider = new GoogleAuthProvider();

    const handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user)
                alert('Successfully created')
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
                <form className="mx-auto w-[400px] max-w-full" onSubmit={handleSubmit}>
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