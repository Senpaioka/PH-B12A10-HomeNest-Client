import { useState, useEffect } from 'react';
import {useAuth} from '../hooks/useAuth';
import {getMyRatings} from '../api/fetching';
import ReviewCard from '../components/ReviewCard';

function MyRatings() {

  const {user} = useAuth();
    const [myRatings, setMyRatings] = useState([]);


  useEffect(() => {

    async function fetchingMyRatings() {

      if (!user) return;

      try {
        const data = await getMyRatings(user);
        setMyRatings(data);
      }catch(error) {
        console.error('Error fetching feedbacks!', error);
      }

    };
    fetchingMyRatings();
  },[user]);


  if (myRatings.length < 1) {
    return (
        <div className="w-10/12 mx-auto mt-[50px]">
          <div className="flex justify-center items-center">
            <div className="bg-base-100 p-6 text-center">
              <h2 className="text-lg font-bold text-gray-700">No items found</h2>
              <p className="text-gray-500 mt-2">
                Try rating a property to see it here!
              </p>
            </div>
          </div>
        </div>
    );
  }

  return (
     <div className='w-10/12 mx-auto my-[50px]'>
       
      <ul className="list bg-base-100 rounded-box shadow-md">  
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most recent reviews.</li>
        
        {
          myRatings.map( item => <ReviewCard review={item} key={item._id}></ReviewCard>)
        }

      </ul>
     </div>
  );
}

export default MyRatings;