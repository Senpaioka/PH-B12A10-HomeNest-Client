import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import {addingProperties} from '../api/backend';
import { useNavigate } from "react-router";



function AddProperty() {

  const initialData = {
    propertyName: "",
    category: "",
    price: "",
    location: "",
    image: "",
    description: ""
  }

  const { user } = useAuth();
  const [formData, setFormData] = useState(initialData);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    // send to backend
    try {
      const response = addingProperties(user, formData);
      
      setMessage({
        type: "success",
        text: response.message || "Property added successfully!",
      });

      // reset form
      setFormData(initialData);

      // redirect
      navigate('/my-properties');

    }catch(error) {

      setMessage({
        type: "error",
        text: error.response?.data?.message || error.message,
      });

    }finally{
      setIsLoading(false);
    }

  };


  return (
      <div className="min-h-screen bg-base-200 py-10 px-5">
        <div className="max-w-xl mx-auto bg-base-100 shadow-xl p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Add New Property
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
                value={formData.propertyName}
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
                value={formData.category}
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
                value={formData.price}
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
                value={formData.location}
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
                value={formData.image}
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
              value={formData.description}
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
                  value={user?.displayName || "Anonymous"}
                  readOnly
                />
              </div>
              <div>
                <label className="label font-semibold">User Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none"
                  value={user?.email || "N/A"}
                  readOnly
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary text-white w-full mt-2"
            >
              Add Property
            </button>
          </form>
        </div>
      </div>
  );
}

export default AddProperty;







