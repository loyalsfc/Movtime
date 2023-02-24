import { useState } from "react"
import WelcomeNote from "./WelcomeNote"
import { Link } from "react-router-dom"
import image from "../../assets/image2.png"
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import GoogleLogin from "./GoogleLogin"
import { setUser } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux"; 

function Login(){
    const auth = getAuth();
    const [formData, setFormData] = useState({email: "", password: "", rememberSign: false})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
            // Signed in 
                const user = userCredential.user;
                
                dispatch(setUser({
                    email: user.email,
                    name: user.displayName,
                    phone: user.phoneNumber,
                    photoURL: user.photoURL
                }))
                alert('sign in successful')
                navigate('/dashboard')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode)
            });
    }

    

    return (
        <div className="flex bg-primary-dark justify-between">
            <div className="login-page w-full md:w-2/5 px-2">
                <WelcomeNote 
                    title="Welcome back"
                    subtitle = "Welcome back! Please enter your details."
                />
               <GoogleLogin />
                <div className="flex items-center my-10 mx-auto w-[400px] max-w-full">
                    <div className="w-full h-[1px] bg-[#4D4B4B]"></div>
                    <div className="mx-9">or</div>
                    <div className="w-full h-[1px] bg-[#4D4B4B]"></div>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto w-[400px] max-w-full">
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
            <div className="h-screen hidden w-3/5 md:block">
                <img src={image} alt="Banner image" className="h-full w-full"/>
            </div>
        </div>
    )
}

export default Login 