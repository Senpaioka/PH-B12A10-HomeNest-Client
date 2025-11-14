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



async function getPropertyDetails(user, propertyId) {

    try {
        const response = await axios.get(`${BASE_URL}/properties/${propertyId}`,
            {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                }
            }
        );

        return response.data;
    
    } catch(error) {
        console.error("Error loading property details.", error);
        throw new Error('Failed to load property details.');
    } 
}



async function getUserFeedbacks(propertyId) {

    try {
        const response = await axios.get(`${BASE_URL}/feedback/${propertyId}`);
        return response.data;
    }catch(error) {
        console.error("Error loading user feedbacks.", error);
        throw new Error('Failed to load user feedbacks.');
    } 
}



async function getMyRatings (user) {
    
    try {
        const response = await axios.get(`${BASE_URL}/my-feedbacks`, {
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            }
        });

        return response.data;
    }
    catch(error) {
        console.error("Error loading ratings.", error);
        throw new Error('Failed to load ratings.');
    }
}


async function getSortedProperties(sortBy, orderBy) {
  try {

    const response = await axios.get(`${BASE_URL}/filtered?sort=${sortBy}&order=${orderBy}`);
    return response.data;

  } catch (error) {
    console.error("Sorting failed.", error);
    throw new Error("Failed to load sorted properties"); 
  }
}


async function getSearchResult(query) {

    try {
        const response = await axios.get(`${BASE_URL}/searched?q=${query}`);
        return response.data;

    } catch (error) {
        console.error("Search failed", error);
        throw new Error("Failed to load searched properties"); 
    }
}





export {getAllProperties, getMyProperties, getPropertyDetails, getUserFeedbacks, getMyRatings, getSortedProperties, getSearchResult};