import { FiSearch } from "react-icons/fi";

const Search = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <div className="flex items-center p-2 w-full sm:w-[20em] md:w-[25em] lg:w-[30em] h-[4em] border-[1px] border-black rounded-md">
      <FiSearch className="cursor-pointer" onClick={() => onSearch()} />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
        placeholder="Search your product"
        className="outline-none border-none ml-2 w-full"
      />
    </div>
  );
};

export default Search;
