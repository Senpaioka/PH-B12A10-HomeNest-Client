import { useLoaderData } from "react-router";


function AllProperties() {

  const data = useLoaderData();
  console.log(data);

  return (
     <div>
       AllProperties component
     </div>
  );
}

export default AllProperties;