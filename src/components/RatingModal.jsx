import { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import {useAuth} from '../hooks/useAuth';
import {addingUserRating} from '../api/backend';

function RatingModal({propertyId}) {
    
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState("");
    const {user} = useAuth();
    const id = propertyId;


    function handleRating(event) {
        event.preventDefault();

        const userRating = rating;
        const userComment = feedback;
        const propertyId = id;
        const userFeedback = {propertyId, userRating, userComment};
        addingUserRating(user, userFeedback);
        setRating(0);
        setFeedback("");
        document.getElementById("rating-modal").close();
    }

  
    return (
        <dialog id="rating-modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Rate This Property</h3>
                <p className="py-4">Please share your experience by giving a rating below:</p>

                {/* Example Rating Form */}
                
                <div className="w-8/12 mx-auto">
                    <div className="text-center space-y-5">
                        <Rating
                        value={rating}
                        onChange={setRating}
                        />
                        <button className="btn bg-red-500 text-white cursor-pointer px-3 py-2" type="button" onClick={() => setRating(0)}>
                        Reset
                        </button>
                    </div>
                </div>

                <form onSubmit={handleRating} method="dialog" className="flex flex-col gap-4 mt-5">
                     <textarea className="textarea w-full textarea-bordered" placeholder="Write your feedback..." value={feedback} onChange={(e) => setFeedback(e.target.value)} required></textarea>
                    {
                        rating < 1 ?
                        <button className="btn btn-primary" disabled>Give a rating first</button>
                        :
                        <button className="btn btn-primary text-white">Feedback</button>
                    }
                </form>

                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
  );
}

export default RatingModal;
