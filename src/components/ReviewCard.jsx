import { FaStar } from "react-icons/fa";
import {Link} from 'react-router';


function ReviewCard({ review }) {
  return (
    <li className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-base-200 my-3">
      
      {/* Property Thumbnail */}
      <div className="w-full sm:w-24 h-24 rounded-xl overflow-hidden">
        <img
          src={review.propertyInfo.image}
          alt={review.propertyName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Review Details */}
      <div className="flex-1 w-full">
        {/* Reviewer + Property Info */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
          <div>
            <Link to={`/details/${review.propertyInfo._id}`} className="font-semibold text-lg text-gray-800">{review.propertyInfo.propertyName}</Link>
            <p className="text-sm text-gray-500">{review.username}</p>
          </div>
          <p className="text-xs text-gray-400 mt-1 sm:mt-0">
            {new Date(review.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`w-4 h-4 ${
                i < review.userRating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {review.userComment}
        </p>
      </div>
    </li>
  );
}

export default ReviewCard;
