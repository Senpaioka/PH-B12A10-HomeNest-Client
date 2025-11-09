const BASE_URL = import.meta.env.VITE_API_URL;

async function registerOrLoginUser(user) {
  
    const token = await user.getIdToken();
    const provider = user.providerData[0];

    const response = await fetch(`${BASE_URL}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            uid: user.uid,
            name: provider.displayName,
            email: provider.email,
            photo: provider.photoURL,
            providerId: provider.providerId,
            emailVerified: !!user.emailVerified
        }),
    });

    if (!response.ok) throw new Error("Something Went Wrong");

    return await response.json();
}




export {registerOrLoginUser};