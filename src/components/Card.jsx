import { Link } from "react-router";
import { FaMapMarkerAlt } from "react-icons/fa";

function Card({ propertyInfo }) {
  

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden h-full w-full">
      {/* Image Section */}
      <figure className="relative">
        <img
          src={propertyInfo.image}
          alt={propertyInfo.propertyName}
          className="w-full h-52 object-cover"
        />
        <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs px-3 py-1 rounded-full">
          {propertyInfo.category}
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body px-5 py-4">
        {/* Property Name */}
        <h2 className="card-title text-xl font-semibold text-black-800">
          {propertyInfo.propertyName}
        </h2>

        {/* Location */}
        <p className="text-gray-500 text-sm flex items-center gap-1">
          <FaMapMarkerAlt />
          {propertyInfo.location}
        </p>

        <p className="text-gray-500 text-sm flex items-center gap-1">
          {propertyInfo.description.length > 30
            ? propertyInfo.description.slice(0, 100) + "..."
            : propertyInfo.description}
        </p>

        {/* Price */}
        <p className="text-lg font-bold text-amber-500 mt-2">
          ${propertyInfo.price.toLocaleString()}
        </p>

        {/* Posted By */}
        <p className="text-sm text-gray-500 mt-1">
          <span className="font-semibold">Posted by:</span> {propertyInfo.userId}
        </p>

        {/* Action Button */}
        <div className="mt-4">
          <Link to={`/details/${propertyInfo._id}`} className="btn btn-primary bg-amber-500 border-none outline-0 w-full text-white">See Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
