import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase.init'

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSinInProvider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleSinInProvider)
    }

    const gitHubSigninProvider = new GithubAuthProvider()
    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubSigninProvider)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log('User is signed in:', user);
            } else {
                setUser(null);
            }
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        loading,
        setLoading,
        signInWithGoogle,
        signInWithGithub,
        signInUser,
        user,
        signOutUser
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider