import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useParams, useNavigate } from "react-router";


// api calling
import {getPropertyDetails} from '../api/fetching';
import { updateProperty } from "../api/updating";



function PropertyEdit() {

const {user} = useAuth();
const {propertyId} = useParams();
const navigate = useNavigate();
const [propertyInfo, setPropertyInfo] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  useEffect(() => {
    async function updatePropertyInfo() {

        if (!user) return;

        try {
            const data = await getPropertyDetails(user, propertyId);
            setPropertyInfo(data);
        }
        catch(error) {
            console.error(`Error fetching property details`, error);
        }
    };
    updatePropertyInfo();
  },[user, propertyId]);


  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProperty(user, propertyInfo, propertyId);
      navigate(`/details/${propertyId}`);
    }catch(error) {
      console.error('Error Updating', error);
    }
  }



  return (

    <div className="min-h-screen bg-base-200 py-10 px-5">
      <div className="max-w-xl mx-auto bg-base-100 shadow-xl p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Edit Property
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Property Name */}
          <div>
            <label className="label font-semibold">Property Name</label>
            <input
              type="text"
              name="propertyName"
              placeholder="Enter property name"
              className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={propertyInfo.propertyName || ""}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-semibold">Category</label>
            <select
              name="category"
              className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={propertyInfo.category || ""}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option>Rent</option>
              <option>Sale</option>
              <option>Commercial</option>
              <option>Land</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="label font-semibold">Price ($)</label>
            <input
              type="number"
              name="price"
              placeholder="Enter property price"
              className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={propertyInfo.price || ""}
              onChange={handleChange}
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="label font-semibold">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter city, area, or address"
              className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={propertyInfo.location || ""}
              onChange={handleChange}
              required
            />
          </div>

          {/* Image Link */}
          <div>
            <label className="label font-semibold">Image URL</label>
            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={propertyInfo.image || ""}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="label font-semibold">Description</label>
            <textarea
              name="description"
              placeholder="Enter property details, size, amenities, etc."
              className="w-full bg-gray-100 rounded-lg px-4 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-primary"
              value={propertyInfo.description || ""}
              onChange={handleChange}
              required
            />
          </div>

          {/* User Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label font-semibold">User Name</label>
              <input
                type="text"
                className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none"
                value={propertyInfo.userInfo?.name || "Anonymous"}
                readOnly
              />
            </div>
            <div>
              <label className="label font-semibold">User Email</label>
              <input
                type="email"
                className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none"
                value={propertyInfo.userInfo?.email || "N/A"}
                readOnly
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary text-white w-full mt-2"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default PropertyEdit;
