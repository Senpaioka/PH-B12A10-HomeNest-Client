import Star from '../components/Star';


function Comment({comment}) {
  return (
     <div className="p-4 bg-base-200 rounded-lg border border-base-300">
        <p className="font-semibold text-gray-800">{comment.username}</p>
        <Star star={comment.userRating}></Star>
        <p className="text-gray-600 mt-1">{comment.userComment}</p>
        <p className="text-gray-400 mt-1">Posted at:{" "}
            {new Date(comment.created_at).toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
                // hour: "numeric",
                // minute: "2-digit",
                // hour12: true,
            })}
        </p>
    </div>
  );
}

export default Comment;