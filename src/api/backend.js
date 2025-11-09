import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_URL;

// axios syntax : axios.post(url, data, config)

async function registerOrLoginUser(user) {
  
    if (!user) return;

    const token = await user.getIdToken();
    const provider = user.providerData[0];

    try {
        const response = await axios.post(`${BASE_URL}/user`, 
            {
                uid: user.uid ?? null,
                name: provider.displayName,
                email: provider.email,
                photo: provider.photoURL,
                providerId: provider.providerId ?? null,
                emailVerified: user.emailVerified ?? false,
                // emailVerified: !!user.emailVerified || false, -> also works
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            }
        );

        return response.data;
    } 
    catch(error) {
        console.error("Error registering or logging in user:", error);
        throw new Error("Something Went Wrong");
    }

}


async function addingProperties(user, propertyInfo) {

    if (!user) return;

    const token = await user.accessToken;

    try {
        const response = await axios.post(`${BASE_URL}/properties`,
            {
                ...propertyInfo
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            }
        );

        return response.data;
    }
    catch(error) {
        console.error("Error adding property to database:", error);
        throw new Error("Something Went Wrong");
    }
}



export {registerOrLoginUser, addingProperties};

