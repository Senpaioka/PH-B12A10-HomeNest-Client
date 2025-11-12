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