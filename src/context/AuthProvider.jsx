import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";
import {AuthContext} from '../context/AuthContext';
import {auth} from '../firebase/firebase.config';
import { useState, useEffect } from 'react';





const provider = new GoogleAuthProvider();
provider.addScope('email');
provider.addScope('profile'); 


function AuthProvider({children}) {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState('');


    // gmail authentication
    function signInWithGmail() {
        setIsLoading(true);
        setIsError('');
        return signInWithPopup(auth, provider)
        .catch(error => setIsError(error.message))
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
        logoutUser
    }



    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;