function SortSearchCard({ onSortChange, onOrderChange, onSearch }) {



  return (
    
    <div className="bg-base-100 shadow-lg rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 my-12">
      {/* Left Section – Sorting Controls */}
      <div className="flex flex-col md:flex-row items-center gap-3 w-full sm:w-auto">
        {/* Sort By Dropdown */}
        <select
          onChange={(e) => onSortChange(e.target.value)}
          className="select select-bordered w-full sm:w-48"
          defaultValue=""
        >
          <option value="" disabled>
            Sort by
          </option>
          <option value="price">Price</option>
          <option value="created_at">Posted Date</option>
          <option value="category">Category</option>
        </select>

        {/* Order Dropdown */}
        <select
          onChange={(e) => onOrderChange(e.target.value)}
          className="select select-bordered w-full sm:w-40"
          defaultValue=""
        >
          <option value="" disabled>
            Order
          </option>
          <option value="asc">Ascending ↑</option>
          <option value="desc">Descending ↓</option>
        </select>
      </div>

      {/* Right Section – Search Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(e.target.search.value);
        }}
        className="flex items-center gap-2 w-full sm:w-auto"
      >
        <input
          type="text"
          name="search"
          placeholder="Search property..."
          className="input input-bordered w-full sm:w-64"
          required
        />
        <button type="submit" className="btn btn-primary text-white">
          Search
        </button>
      </form>
    </div>
  );
}

export default SortSearchCard;
