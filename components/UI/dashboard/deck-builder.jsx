import { CardState } from "../../../src/context/card.context";

const DeckBuilder = () => {
  const { displayFilter } = CardState();

  if (!displayFilter) {
    return <div>All Decks go here!</div>;
  } else {
    return;
  }
};

export default DeckBuilder;
