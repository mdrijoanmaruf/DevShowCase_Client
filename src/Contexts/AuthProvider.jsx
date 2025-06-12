import React, { useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase/firebase.init'

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSinInProvider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleSinInProvider)
    }

    const gitHubSigninProvider = new GithubAuthProvider()
    const signInWithGithub = () => {
        return signInWithPopup(auth, gitHubSigninProvider)
    }

    const authInfo = {
        createUser,
        loading,
        setLoading,
        signInWithGoogle,
        signInWithGithub
    }
    
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider