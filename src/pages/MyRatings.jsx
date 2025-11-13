import { useState, useEffect } from 'react';
import {useAuth} from '../hooks/useAuth';
import {getMyRatings} from '../api/fetching';
import ReviewCard from '../components/ReviewCard';
import Spinner from '../components/Spinner';
import { motion } from "motion/react"



function MyRatings() {



  const {user} = useAuth();
    const [myRatings, setMyRatings] = useState([]);
    const [loading, setLoading] = useState(false);


  useEffect(() => {

    async function fetchingMyRatings() {
      setLoading(true);
      if (!user) return;

      try {
        const data = await getMyRatings(user);
        setMyRatings(data);
      }catch(error) {
        console.error('Error fetching feedbacks!', error);
      }
      finally {
        setLoading(false);
      }

    };
    fetchingMyRatings();
  },[user]);


  if (loading) {
    return <Spinner></Spinner>
  }


  if (myRatings.length < 1) {
    return (
        <div className="w-10/12 mx-auto mt-[50px]">
          <div className="flex justify-center items-center">
            <div className="bg-base-100 p-6 text-center">
              <h2 className="text-lg font-bold">No items found</h2>
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
       
      <ul className="list bg-base-100">  
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most recent reviews.</li>
        
        {/* {
          myRatings.map( item => <ReviewCard review={item} key={item._id}></ReviewCard>)
        } */}

        {
          myRatings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
          <ReviewCard review={item} key={item._id}></ReviewCard>
          </motion.div>
        ))}

      </ul>
     </div>
  );
}

export default MyRatings;
