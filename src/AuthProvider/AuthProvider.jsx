import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createLogin = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
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