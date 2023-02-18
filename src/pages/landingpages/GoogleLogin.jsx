import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Google from "../../assets/Google.png"
import { provider } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/user';

function GoogleLogin() {
    const auth = getAuth()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log(user)
            console.log(result)
            dispatch(setUser(result))
            alert('sign in successful')
            navigate('/dashboard')
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    return (
        <div className='mx-auto w-[400px] max-w-full'>
            <button className="google-login" onClick={signInWithGoogle}>
                <img src={Google} className="mr-3" />
                <span>Log in with Google</span>
            </button>
        </div>
    )
}

export default GoogleLogin
