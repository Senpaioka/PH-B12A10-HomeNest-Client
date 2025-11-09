import { useState, useEffect } from "react";
import {useAuth} from '../hooks/useAuth';
import {getMyProperties} from '../api/fetching';


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


  console.log(property)

  return (
     <div>
       MyProperties component
     </div>
  );
}

export default MyProperties;