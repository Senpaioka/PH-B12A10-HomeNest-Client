import { useState, useEffect } from 'react';
import {useAuth} from '../hooks/useAuth';
import {getMyRatings} from '../api/fetching';

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

  console.log(myRatings)

  return (
     <div>
       MyRatings component
     </div>
  );
}

export default MyRatings;