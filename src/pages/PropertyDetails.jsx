import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router';
import {getPropertyDetails} from '../api/fetching';
import {useAuth} from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router';
import {getUserFeedbacks} from '../api/fetching';
import Spinner from '../components/Spinner';
import RatingModal from '../components/RatingModal';
import SellerModal from '../components/SellerModal';
import Comment from '../components/Comment';


function PropertyDetails() {

  const {user} = useAuth();
  const {propertyId} = useParams();
  const [property, setProperty] = useState(null);
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();



  useEffect(() => {

    async function fetchingPropertyDetails(){

      if (!user) return;

      try {
        const data = await getPropertyDetails(user, propertyId);
        setProperty(data);
      } catch(error) {
        console.error('Error fetching property details', error);
      }
      
    }

    fetchingPropertyDetails();
    
  },[user, propertyId, location.key]);





  useEffect(() => {
    async function fetchingUserComment() {
      
      if (!propertyId) return;

      try {
        const data = await getUserFeedbacks(propertyId);
        setComments(data);
        setRefresh(prev => !prev); // triggering re-fetch
      } catch(error) {
        console.error('Error fetching user comments', error);
      }
    }
    fetchingUserComment();    
  },[propertyId, refresh]);


  if (!property) return <Spinner></Spinner>;



  const openRatingModal = () => {
    document.getElementById("rating-modal").showModal();
  };


  const openSellerModal = () => {
    document.getElementById("seller-modal").showModal();
  }

  return (

    <>

    <title>{property.propertyName}</title>

    {/* rating-modal   */}
    <RatingModal propertyId={property._id}></RatingModal>

    {/* seller-modal  */}
    <SellerModal sellerInfo={property.userInfo}></SellerModal>

    <div className="bg-base-200 min-h-screen py-10">
      <div className="w-11/12 md:w-10/12 mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline mb-6 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back
        </button>

        {/* Property Info Card */}
        <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden mb-10">
          {/* Left Side: Image */}
          <figure className="lg:w-1/2">
            <img
              src={property.image}
              alt={property.propertyName}
              className="w-full h-full object-cover"
            />
          </figure>

          {/* Right Side: Info */}
          <div className="card-body lg:w-1/2 flex flex-col justify-between">
            <div>

              <p className="text-gray-500 text-sm mb-4">
                Posted at:{" "}
                {new Date(property.created_at).toLocaleString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>

              <h2 className="card-title text-3xl font-bold mb-2">{property.propertyName}</h2>
              <p className="text-gray-500 text-sm mb-4">{property.location}</p>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="badge badge-secondary bg-amber-500 border-0 p-3 text-white">{property.category}</div>
                <div className="badge badge-outline text-lg font-semibold">
                  ${parseInt(property.price).toLocaleString()}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-amber-500">Description</h3>
              <p className="text-gray-500 leading-relaxed text-justify">{property.description}</p>
            </div>

            <div className="card-actions justify-end mt-6">
              {
                user.email === property.userInfo.email ? 
                <Link to={`/edit/${property._id}`} className="btn btn-primary bg-amber-500 border-0 text-white">Edit</Link>  
                : 
                <button onClick={openRatingModal} className="btn btn-primary bg-amber-500 border-0 text-white">Rate This</button>
              }
            </div>
          </div>
        </div>

        {/* Seller Info Card */}
        <div className="card bg-base-100 shadow-md p-6 flex flex-col sm:flex-row items-center gap-6">
          {/* Seller Image */}
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={property.userInfo.photo} alt={property.userInfo.name} />
            </div>
          </div>

          {/* Seller Details */}
          <div className="flex-1 text-center sm:text-left">
            <h1>Seller Info:</h1>
            <h3 className="text-xl font-bold text-primary mb-1">{property.userInfo.name}</h3>
            {/* <p className="text-gray-600 mb-1">{property.userInfo.email}</p> */}
            <p className="text-gray-500">
              Member Since:{" "}
                {new Date(property.created_at).toLocaleString("en-US", {
                  year: "numeric",
                })}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={openSellerModal} className="btn btn-outline">View Profile</button>
            {/* <button className="btn btn-primary text-white">Message Seller</button> */}
          </div>
        </div>


          {/* Comments Section */}
        <div className="card bg-base-100 shadow-md p-6">
          <h3 className="text-2xl font-bold text-primary mb-4">Comments ({comments.length})</h3>

          <div className="space-y-4">
            {comments.length > 0 ? (
              comments.map((comment) => (
              <Comment comment={comment} key={comment._id}></Comment>  
              ))
            ) : (
              <p className="text-gray-500 text-center">No comments yet. Be the first!</p>
            )}
          </div>
        </div>


      </div>
    </div>
    </>
  );
}

export default PropertyDetails;




