import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    // update user Profile 
    const updateUserProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
            // profile updated
        })
    }
    // google login
    const loginWithGoogle = () => {
       return signInWithPopup(auth, googleProvider)      
    }
    // email login 
    
    const getName = (e) => {
        setName(e.target.value)
    }

    const getEmail = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    const loginWithEmail = (e) => {
        e.preventDefault()
        return signInWithEmailAndPassword(auth, email, password)
    }

    const singupWithEmail = (e) => {
        e.preventDefault()
       return createUserWithEmailAndPassword(auth, email, password)
            
    }
    // sing out
    const logOut = () =>{
        signOut(auth)
            .then(() => {
            setUser({})
        })
    }
    // observe whether user auth state change or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    },[])


    return {
        user,
        setUser,
        getName,
        getEmail,
        getPassword,
        updateUserProfile,
        logOut,
        loginWithGoogle,
        singupWithEmail,
        loginWithEmail
    }
}

export default useFirebase;