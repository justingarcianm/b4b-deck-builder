import { CardState } from "../../../src/context/card.context";

import { FiTarget } from "react-icons/fi";
import { FaWeightHanging, FaDice } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";

const FilterDisplay = () => {
  const { displayFilter } = CardState();

  const handleClick = (e) => {
    let target = e.target;
    if (target.querySelector("input")) {
      let input = target.querySelector("input");
      // TODO USE ID TO FILTER BASED OFF OF CLICK
      let inputID = input.id;
      input.checked = !input.checked;
    } else {
      let allChecks = document.querySelectorAll("#filter-options input");
      return allChecks.forEach((check) => (check.checked = false));
    }
  };

  if (displayFilter) {
    return (
      <div id="filter-options" className="flex flex-col gap-8 p-4 ">
        <button
          onClick={handleClick}
          id="reset"
          className="uppercase bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full text-start text-xl"
        >
          Reset
        </button>

        <div id="affinity">
          <h3 className="uppercase font-light text-xl mb-1">Card Affinity</h3>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleClick}
              className="flex justify-between items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full"
            >
              <div className="flex justify-start items-center gap-4">
                <IoSpeedometerOutline className="text-blue-500" />
                <h4>REFLEX</h4>
              </div>
              <input
                checked={false}
                type="checkbox"
                name="reflex"
                id="reflex"
              />
            </button>
            <button
              onClick={handleClick}
              className="flex justify-between items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full"
            >
              <div className="flex justify-start items-center gap-4">
                <FiTarget className="text-red-500" />
                <h4>DISCIPLINE</h4>
              </div>
              <input
                checked={false}
                type="checkbox"
                name="discipline"
                id="discipline"
              />
            </button>
            <button
              onClick={handleClick}
              className="flex justify-between items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full"
            >
              <div className="flex justify-start items-center gap-4">
                <FaWeightHanging className="text-green-500" />
                <h4>BRAWN</h4>
              </div>
              <input checked={false} type="checkbox" name="brawn" id="brawn" />
            </button>
            <button
              onClick={handleClick}
              className="flex justify-between items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full"
            >
              <div className="flex justify-start items-center gap-4">
                <FaDice className="text-yellow-500" />
                <h4>FORTUNE</h4>
              </div>
              <input
                checked={false}
                type="checkbox"
                name="fortune"
                id="fortune"
              />
            </button>
          </div>
        </div>

        <div id="type">
          <h3 className="uppercase font-light text-xl mb-1">Card Type</h3>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleClick}
              className="flex justify-between items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full"
            >
              <h4>OFFENSE</h4>
              <input
                checked={false}
                type="checkbox"
                name="offense"
                id="offense"
              />
            </button>
            <button
              onClick={handleClick}
              className="flex justify-between items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full"
            >
              <h4>DEFENSE</h4>
              <input
                checked={false}
                type="checkbox"
                name="defense"
                id="defense"
              />
            </button>
            <button
              onClick={handleClick}
              className="flex justify-between items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full"
            >
              <h4>UTILITY</h4>
              <input
                checked={false}
                type="checkbox"
                name="utility"
                id="utility"
              />
            </button>
            <button
              onClick={handleClick}
              className="flex justify-between items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full"
            >
              <h4>MOBILITY</h4>
              <input
                checked={false}
                type="checkbox"
                name="mobility"
                id="mobility"
              />
            </button>
          </div>
        </div>
        <div id="expansion">
          <h3 className="uppercase font-light text-xl mb-1">Expansion</h3>
          <div className="flex flex-col gap-4">
            <h4>COMING SOON</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return;
  }
};

export default FilterDisplay;
