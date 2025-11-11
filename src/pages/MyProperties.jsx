import { useState, useEffect } from "react";
import {useAuth} from '../hooks/useAuth';
import {getMyProperties} from '../api/fetching';
import MyCard from "../components/MyCard";


function MyProperties() {

  const {user} = useAuth();
  const [property, setProperty] = useState([]);

  useEffect(() => {

    async function fetchingMyProperties() {

      if (!user) return;

      try {
        const data = await getMyProperties(user);
        setProperty(data);
      }catch(error) {
        console.error('Error fetching properties!', error);
      }

    };
    fetchingMyProperties();
  },[user]);



  return (
     <div className="w-10/12 mx-auto">
       MyProperties component

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {
        property.map(item => <MyCard propertyInfo={item} key={item._id}></MyCard>)
        }
       </div>
     </div>
  );
}

export default MyProperties;