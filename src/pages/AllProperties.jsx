import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import Card from "../components/Card";
import SortSearchCard from "../components/SortSearchCard";
import Spinner from '../components/Spinner';
// api call
import {getSortedProperties, getSearchResult} from '../api/fetching';

function AllProperties() {

  const noSort = useLoaderData();

  const [data, setData] = useState(noSort || [])
  const [sortBy, setSortBy] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSortChange = (value) => setSortBy(value);
  const handleOrderChange = (value) => setOrderBy(value);
  const handleSearch = (term) => setSearch(term);



  useEffect(() => {
    async function fetchingSortedProperties() {
      
      if (!sortBy || !orderBy) return;
      
      setLoading(true);

      try {
        setSortBy('');
        setOrderBy('');
        const fetched = await getSortedProperties(sortBy, orderBy);
        setData(fetched)
      } 
      catch(error){
        console.error(error.message);
      }
      finally {
        setLoading(false);
      }
    }
    fetchingSortedProperties();
  },[sortBy, orderBy])




  useEffect(() => {
    async function fetchingSearchedResult() {
      
      if (!search) return;

      setLoading(true);

      try {
        setSearch('');
        const searched = await getSearchResult(search);
        setData(searched);
      }
      catch(error){
        console.error(error.message);
      }
      finally {
        setLoading(false);
      }

    };
    fetchingSearchedResult();
  },[search])



  if (loading) return <Spinner></Spinner>


  if (data.length < 1) {
    return (
        <div className="w-10/12 mx-auto mt-[50px]">
          <div className="flex justify-center items-center">
            <div className="bg-base-100 p-6 text-center">
              <h2 className="text-lg font-bold text-gray-700">No items found</h2>
              <p className="text-gray-500 mt-2">
                Try again nothing to see here!
              </p>
            </div>
          </div>
        </div>
    );
  }


  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">All Properties</h1>

      <SortSearchCard 
      onSortChange={handleSortChange} 
      onOrderChange={handleOrderChange} 
      onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {
          data.map((item) => (<Card propertyInfo={item} key={item._id} />))
        }

      </div>
    </div>
  );
}

export default AllProperties;



