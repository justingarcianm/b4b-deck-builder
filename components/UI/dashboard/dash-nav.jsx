import { useState } from "react";
import { FaSlidersH, FaSearch } from "react-icons/fa";
import { CardState } from "../../../src/context/card.context";

const DashNav = () => {
  const [activeFilter, setActiveFilter] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { setDisplayFilter } = CardState();

  const openFilters = () => {
    if (activeFilter) {
      // TODO filter cards based on params
      setDisplayFilter(false);
      setActiveFilter(false);
    } else {
      setDisplayFilter(true);
      setActiveFilter(true);
    }
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue.length);
    if (searchValue.length === 2) {
      return openFilters();
    }
  };

  const resetHandler = () => {
    setSearchValue("");
    openFilters();
  };

  return (
    <div className="w-full flex justify-end items-center gap-4 p-4">
      <div
        className={`${
          activeFilter ? "bg-gray-500" : "bg-transparent"
        } hover:bg-gray-500 border transition-colors duration-200 p-2 rounded-md border-gray-500 flex justify-start items-center gap-2 w-1/5 cursor-pointer`}
        onClick={() => openFilters()}
      >
        <FaSlidersH />
        <button className="uppercase">Filters</button>
      </div>
      <form
        className="flex justify-start items-stretch border border-gray-500 rounded-md p-2 gap-2 w-1/5"
        id="searchForm"
        onSubmit={(event) => event.preventDefault()}
      >
        <button type="submit" className="border-0">
          <FaSearch />
        </button>
        <input
          type="text"
          placeholder="SEARCH"
          className="bg-transparent border-0 w-full focus:outline-0 uppercase"
          value={searchValue}
          onChange={(event) => searchHandler(event)}
        />
      </form>
      <button
        className={`w-1/5 bg-red-500 p-2 rounded-md ${
          activeFilter ? "block" : "hidden"
        }`}
        onClick={resetHandler}
      >
        RESET
      </button>
    </div>
  );
};

export default DashNav;
