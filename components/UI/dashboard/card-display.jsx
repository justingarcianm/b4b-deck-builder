import { useEffect } from "react";
import Card from "../../card";
import { CardState } from "../../../src/context/card.context";

const CardDisplay = ({ data }) => {
  let { cards, setCards, loading } = CardState();

  useEffect(() => {
    setCards(data);
  }, [data, setCards]);

  return (
    <div className="flex">
      {cards.length > 0 &&
        cards.map((card) => <Card key={card.id} card={card} />)}
    </div>
  );
};

export default CardDisplay;
