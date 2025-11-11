import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;


async function updateProperty(user, updatedInfo, propertyId) {

    try {
        const response = await axios.patch(`${BASE_URL}/update/${propertyId}`,
            {
                propertyName: updatedInfo.propertyName,
                category: updatedInfo.category,
                price: updatedInfo.price,
                location: updatedInfo.location,
                image: updatedInfo.image,
                description: updatedInfo.description,
            },
            {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                }
            }
        );

        return response.data;
    
    } catch (error) {
        console.error("Error updating properties data", error);
        throw new Error("failed to update property information.");
    }
}





async function deleteProperty(user, propertyId) {

    try {
        const response = await axios.delete(`${BASE_URL}/properties/${propertyId}`, 
            {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                }
            }
        );

        return response.data;
        
    } catch (error) {
        console.error("Error deleting properties data", error);
        throw new Error("failed to delete property.");
    }
}





export {updateProperty, deleteProperty};