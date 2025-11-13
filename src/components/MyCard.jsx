import { Link } from "react-router";


function MyCard({ propertyInfo, onDelete }) {

  return (

    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
      {/* Image Section */}
      <figure className="relative">
        <img
          src={propertyInfo.image}
          alt={propertyInfo.propertyName}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs px-3 py-1 rounded-full">
          {propertyInfo.category}
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body p-5 flex flex-col justify-between">
        {/* Property Name */}
        <h2 className="card-title text-xl font-semibold mb-1">
          {propertyInfo.propertyName}
        </h2>

        {/* Location */}
        <p className="text-gray-500 text-sm flex items-center gap-1 mb-1">
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
        <p className="text-lg font-bold text-amber-500 mb-1">
          ${parseInt(propertyInfo.price).toLocaleString()}
        </p>

        {/* Posted Date */}
        <p className="text-sm text-gray-500 mb-3">
          <span className="font-semibold">Posted:</span>{" "}
          {new Date(propertyInfo.created_at).toLocaleString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>

        {/* Buttons Section */}
        <div className="flex flex-wrap gap-2 mt-2">
          <Link to={`/details/${propertyInfo._id}`} className="btn btn-sm btn-primary text-white flex-1"> Details </Link>
          <Link to={`/edit/${propertyInfo._id}`} className="btn btn-sm btn-outline flex-1"> Update </Link>

          <button onClick={() => onDelete(propertyInfo._id)} className="btn btn-sm btn-error text-white flex-1"> Delete </button>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
