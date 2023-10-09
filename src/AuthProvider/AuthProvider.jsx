import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loader, setLoader] = useState(true);

    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const createLogin = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user is changed from auth', currentUser);
            setUser(currentUser);
            setLoader(false);
        })
        return ()=> {
            unSubscribe();
        }
    },[])

    const LogOut = () => {
        setLoader(true);
        return signOut(auth);
    }


    const authInfo = {
        user,
        createUser,
        createLogin,
        loader,
        handleUserProfile,
        handleGoogleLogin,
        LogOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}