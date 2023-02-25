import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';

const userAuth = () => {
    const [currentUser, setCurrentUser] = useState(null)
    const auth = getAuth();

    useEffect(()=>{    
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setCurrentUser({
            email: user?.email,
            name: user?.displayName,
            phone: user?.phoneNumber,
            photoURL: user?.photoURL
        })
        } else {
          // User is signed out
          setCurrentUser(null)
        }
      });
    },[onAuthStateChanged])
    return (
      {currentUser}
    )
}

export default userAuth
