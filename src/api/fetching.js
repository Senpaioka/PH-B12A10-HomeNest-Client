import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;



async function getAllProperties() {

    try {
        const response = await axios.get(`${BASE_URL}/properties`);
        return response.data;
    }
    catch(error){
        console.error("Error loading properties data:", error);
        throw new Error("Failed to load properties data.");
    }

}



async function getMyProperties(user) {

    try {
        const response = await axios.get(`${BASE_URL}/my-submission`,
            {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                },
            }
        );

        return response.data;
    
    } catch(error) {
        console.error("Error loading properties data:", error);
        throw new Error("Failed to load properties data.");

    }
}




export {getAllProperties, getMyProperties};