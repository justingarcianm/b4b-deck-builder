import { useEffect, useState } from "react";
import Card from "../../card";
import { CardState } from "../../../src/context/card.context";
import apiHandler from "../../../src/utils/apiHandler";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const CardDisplay = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  let { cards, setCards, loading } = CardState();

  useEffect(() => {
    setCards(data);
  }, [data, setCards]);

  const updatePage = async (direction) => {
    if (direction === "forward") {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
    let updatedData = await apiHandler(`cards?page=${currentPage}`);
    return setCards(updatedData);
  };

  return (
    <div className="flex items-center justify-between gap-4 h-full pt-4">
      <div className="my-auto hidden">
        <AiFillCaretLeft
          className={`text-8xl text-gray-200 cursor-pointer hover:text-gray-300 transition-colors duration-200 ${
            currentPage > 1 ? "block" : "hidden"
          }`}
        />
      </div>

      <div className="w-full">
        <div className="grid xl:grid-cols-4 gap-3 xl:grid-rows-2">
          {cards.length > 0 &&
            cards.map((card) => <Card key={card.id} card={card} />)}
        </div>
        <span className="mt-4 text-center w-full block">
          PAGE {currentPage} / 0
        </span>
      </div>

      <div className="my-auto">
        <AiFillCaretRight className="text-8xl text-gray-200 cursor-pointer hover:text-gray-300 transition-colors duration-200" />
      </div>
    </div>
  );
};

export default CardDisplay;
