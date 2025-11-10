import { Link } from "react-router";


function Card({ propertyInfo }) {
  

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
      {/* Image Section */}
      <figure className="relative">
        <img
          src={propertyInfo.image}
          alt={propertyInfo.propertyName}
          className="w-full h-52 object-cover"
        />
        <div className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
          {propertyInfo.category}
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body px-5 py-4">
        {/* Property Name */}
        <h2 className="card-title text-xl font-semibold text-gray-800">
          {propertyInfo.propertyName}
        </h2>

        {/* Location */}
        <p className="text-gray-500 text-sm flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-2 4-2 4-2-2.896-2-4z"
            />
          </svg>
          {propertyInfo.location}
        </p>

        {/* Price */}
        <p className="text-lg font-bold text-primary mt-2">
          ${propertyInfo.price.toLocaleString()}
        </p>

        {/* Posted By */}
        <p className="text-sm text-gray-600 mt-1">
          <span className="font-semibold">Posted by:</span> {propertyInfo.userId}
        </p>

        {/* Action Button */}
        <div className="mt-4">
          <Link to={`/details/${propertyInfo._id}`} className="btn btn-primary w-full text-white">See Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
