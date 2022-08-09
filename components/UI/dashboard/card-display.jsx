import { useEffect } from "react";
import Card from "../../card";
import { CardState } from "../../../src/context/card.context";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const CardDisplay = ({ data }) => {
  let { cards, setCards, loading } = CardState();

  useEffect(() => {
    setCards(data);
  }, [data, setCards]);

  return (
    <div className="flex align-middle justify-between gap-4">
      <div className="my-auto">
        <AiFillCaretLeft className="text-8xl text-gray-200 cursor-pointer hover:text-gray-300 transition-colors duration-200" />
      </div>

      <div className="flex w-full">
        {cards.length > 0 &&
          cards.map((card) => <Card key={card.id} card={card} />)}
      </div>

      <div className="my-auto">
        <AiFillCaretRight className="text-8xl text-gray-200 cursor-pointer hover:text-gray-300 transition-colors duration-200" />
      </div>
    </div>
  );
};

export default CardDisplay;
