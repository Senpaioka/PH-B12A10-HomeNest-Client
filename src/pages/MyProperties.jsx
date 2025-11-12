import { useState, useEffect } from "react";
import {useAuth} from '../hooks/useAuth';
import MyCard from "../components/MyCard";
import Swal from 'sweetalert2'

// api calling
import {getMyProperties} from '../api/fetching';
import { deleteProperty } from "../api/updating";

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





  async function handleDeleteProperty(getId) {
    if (!user) return;

    // alert
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        theme: "auto",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then( async(result) => {
        if (result.isConfirmed) {

        try {
            const response = await deleteProperty(user, getId);
            if (response.result.deletedCount == 1) {
              // Update state to remove the deleted property
              setProperty(prev => prev.filter(p => p._id.toString() !== getId));

              // re-confirming deletion
              Swal.fire({
                title: "Deleted!",
                text: "Your property has been deleted.",
                icon: "success",
                theme: "auto",
                timer: 1500,
                showConfirmButton: false,
                position: "top-end",
              });
            }
          } 
          catch (error) {

            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong while deleting!",
            });
            
            console.error('Error deleting property!', error);
          }
        }
      });

    // try {
    //   const response = await deleteProperty(user, getId);

    //   if (response.result.deletedCount == 1) {
    //     // Update state to remove the deleted property
    //     setProperty(prev => prev.filter(p => p._id.toString() !== getId));
    //   }

    // } catch (error) {
    //   console.error('Error deleting property!', error);
    // }
  }



//   async function handleDeleteProperty() {
//   if (!user) {
//     alert("You must be logged in to delete a property.");
//     return;
//   }

//   const confirmed = confirm("Are you sure you want to delete this property?");
//   if (!confirmed) return;

//   try {
//     const res = await deleteProperty(user, _id);

//     if (res.ok) {
//       alert("Property deleted successfully!");
//       // Optionally refresh or update UI:
//       // e.g. remove from local state
//     } else {
//       console.error("Failed to delete property:", res.statusText);
//       alert("Something went wrong while deleting!");
//     }

//   } catch (error) {
//     console.error("Error deleting property!", error);
//     alert("Server error while deleting property.");
//   }
// }




  return (
     <div className="w-10/12 mx-auto">
       MyProperties component

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {
        property.map(item => <MyCard propertyInfo={item} key={item._id} onDelete={handleDeleteProperty}></MyCard>)
        }
       </div>
     </div>
  );
}

export default MyProperties;