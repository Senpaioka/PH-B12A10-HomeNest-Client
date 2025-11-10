import { useLoaderData } from "react-router";
import Card from "../components/Card";

function AllProperties() {
  const data = useLoaderData();

  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">All Properties</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {
          data.map((item) => (<Card propertyInfo={item} key={item._id} />))
        }
        
      </div>
    </div>
  );
}

export default AllProperties;



