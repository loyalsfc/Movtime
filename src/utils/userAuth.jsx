import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import { setUser } from '../features/userSlice';
import { useDispatch } from 'react-redux';

const userAuth = () => {
    const [currentUser, setCurrentUser] = useState(null)
    const auth = getAuth();
    const dispatch = useDispatch();

    useEffect(()=>{    
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user)
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const userObject = {
            id: user?.uid,
            email: user?.email,
            name: user?.displayName,
            phone: user?.phoneNumber,
            photoURL: user?.photoURL
          }
          setCurrentUser(userObject)
          dispatch(setUser(userObject))
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
