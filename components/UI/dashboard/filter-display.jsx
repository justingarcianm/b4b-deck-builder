import { CardState } from "../../../src/context/card.context";

import { FiTarget } from "react-icons/fi";
import { FaWeightHanging, FaDice } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";

const FilterDisplay = () => {
  const { displayFilter } = CardState();

  const handleClick = (e) => {
    let target = e.target;
    let input = target.querySelector("input");
    // TODO USE ID TO FILTER BASED OFF OF CLICK
    let inputID = input.id || null;
    let cat = input.getAttribute("datatype") || null;
    input.checked = !input.checked;

    console.log(inputID, cat);
  };

  const handleReset = () => {
    let allChecks = document.querySelectorAll("#filter-options input");
    return allChecks.forEach((check) => (check.checked = false));
  };

  if (displayFilter) {
    return (
      <div
        id="filter-options"
        className="flex flex-col gap-8 p-4 overflow-y-scroll h-full"
      >
        <button
          id="reset"
          className="uppercase bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full text-start text-2xl"
          onClick={handleReset}
        >
          Reset
        </button>

        <div id="affinity">
          <h3 className="uppercase font-light text-2xl mb-1">Card Affinity</h3>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleClick}
              className="flex justify-between items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full"
            >
              <div className="pointer-events-none flex justify-start items-center gap-4">
                <IoSpeedometerOutline className="text-blue-500 text-2xl" />
                <h4 className="text-xl uppercase">REFLEX</h4>
              </div>
              <input
                defaultChecked={false}
                type="checkbox"
                name="reflex"
                id="REFLEX"
                datatype="AFFINITY"
                className="pointer-events-none"
              />
            </button>
            <button
              onClick={handleClick}
              className="flex justify-between items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full"
            >
              <div className="pointer-events-none flex justify-start items-center gap-4">
                <FiTarget className="text-red-500 text-2xl" />
                <h4 className="text-xl uppercase">DISCIPLINE</h4>
              </div>
              <input
                defaultChecked={false}
                type="checkbox"
                name="discipline"
                id="DISCIPLINE"
                datatype="AFFINITY"
                className="pointer-events-none"
              />
            </button>
            <button
              onClick={handleClick}
              className="flex justify-between items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full"
            >
              <div className="pointer-events-none flex justify-start items-center gap-4">
                <FaWeightHanging className="text-green-500 text-2xl" />
                <h4 className="text-xl uppercase">BRAWN</h4>
              </div>
              <input
                defaultChecked={false}
                type="checkbox"
                name="brawn"
                id="BRAWN"
                datatype="AFFINITY"
                className="pointer-events-none"
              />
            </button>
            <button
              onClick={handleClick}
              className="flex justify-between items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full"
            >
              <div className="pointer-events-none flex justify-start items-center gap-4">
                <FaDice className="text-yellow-500 text-2xl" />
                <h4 className="text-xl uppercase">FORTUNE</h4>
              </div>
              <input
                defaultChecked={false}
                type="checkbox"
                name="fortune"
                id="FORTUNE"
                datatype="AFFINITY"
                className="pointer-events-none"
              />
            </button>
          </div>
        </div>

        <div id="type">
          <h3 className="uppercase font-light text-2xl mb-1">Card Type</h3>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleClick}
              className="flex justify-between items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full"
            >
              <h4 className="pointer-events-none text-xl uppercase">OFFENSE</h4>
              <input
                defaultChecked={false}
                type="checkbox"
                name="offense"
                id="OFFENSE"
                datatype="TYPE"
                className="pointer-events-none"
              />
            </button>
            <button
              onClick={handleClick}
              className="flex justify-between items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full"
            >
              <h4 className="pointer-events-none text-xl uppercase">DEFENSE</h4>
              <input
                defaultChecked={false}
                type="checkbox"
                name="defense"
                id="DEFENSE"
                datatype="TYPE"
                className="pointer-events-none"
              />
            </button>
            <button
              onClick={handleClick}
              className="flex justify-between items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full"
            >
              <h4 className="pointer-events-none text-xl uppercase">UTILITY</h4>
              <input
                defaultChecked={false}
                type="checkbox"
                name="utility"
                id="UTILITY"
                datatype="TYPE"
                className="pointer-events-none"
              />
            </button>
            <button
              onClick={handleClick}
              className="flex justify-between items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-100 rounded-md p-4 w-full"
            >
              <h4 className="pointer-events-none text-xl uppercase">
                MOBILITY
              </h4>
              <input
                defaultChecked={false}
                type="checkbox"
                name="mobility"
                id="MOBILITY"
                datatype="TYPE"
                className="pointer-events-none"
              />
            </button>
          </div>
        </div>
        <div id="expansion">
          <h3 className="uppercase font-light text-2xl mb-1">Expansion</h3>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl uppercase">COMING SOON</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return;
  }
};

export default FilterDisplay;
