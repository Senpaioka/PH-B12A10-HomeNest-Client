import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import {AuthContext} from '../context/AuthContext';
import {auth} from '../firebase/firebase.config';
import { useState, useEffect } from 'react';





const provider = new GoogleAuthProvider();
provider.addScope('email');
provider.addScope('profile'); 


function AuthProvider({children}) {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState('');


    // gmail authentication
    function signInWithGmail() {
        setIsLoading(true);
        setIsError('');
        return signInWithPopup(auth, provider)
        .catch(error => {
            setIsError(error.message);
            throw error;
        })
        .finally(() => setIsLoading(false));
    }



    // register with email and password
    // check for valid password
    function validatePassword(password) {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 6;

        if (!hasUpperCase) return "Password must include at least one uppercase letter.";
        if (!hasLowerCase) return "Password must include at least one lowercase letter.";
        if (!hasMinLength) return "Password must be at least 6 characters long.";

        return null; 
    }



    function registerWithEmailAndPassword(name, url, email, password) {
        
        setIsError('');
        setIsLoading(true);

        const invalidPassword = validatePassword(password);
        if (invalidPassword) {
            setIsError(invalidPassword);
            return Promise.reject(invalidPassword);
            // return; <- also valid
        }

        return createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            // getting user
            const currentUser = result.user;
            // updating user info
            return updateProfile(currentUser, {
                displayName: name,
                photoURL: url,
            })
            .then(() => {
                setUser({...currentUser, displayName: name, photoURL: url});
            })
        })
        .catch(error => {
            setIsError(error.message);
            throw error;
        })
        .finally(() => setIsLoading(false));
    }



    // logging with email and password
    function loggingInVerifiedUser(email, password){

        setIsError('');
        setIsLoading(true);

        return signInWithEmailAndPassword(auth, email, password)
        .catch(error => {
            setIsError(error.message);
            throw error; // re throw
        })
        .finally(() => setIsLoading(false));
    }



    // logout
    function logoutUser() {
        setIsLoading(true);
        setIsError('');
        return signOut(auth)
        .then(() => setUser(null))
        .catch(error => setIsError(error.message))
        .finally(() => setIsLoading(false));
    }



    // tracking user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            // Ensure we have the email from any available source
            const userEmail = currentUser.email || 
                            (currentUser.providerData && 
                                currentUser.providerData[0]?.email) ||
                            currentUser.providerData?.find(p => p.email)?.email;
            
            setUser({ ...currentUser, email: userEmail });
            setIsLoading(false);
        } else {
            setUser(null);
        }
    });

    return () => unsubscribe();
    }, []);



    // info
    const authInfo = {
        user,
        isLoading,
        isError,
        signInWithGmail,
        logoutUser,
        registerWithEmailAndPassword,
        loggingInVerifiedUser
    }



    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;