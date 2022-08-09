import { useContext, useState, createContext } from "react";

const CardWrapper = createContext();

const CardContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  const loadCards = (data) => {
    setLoading(true);
    setCards(data);
    return setLoading(false);
  };

  const filterCardsHandler = (newCard) =>
    setFilteredCards((prevState) => [...prevState, newCard]);

  const resetFilteredCards = () => setFilteredCards([]);

  return (
    <CardWrapper.Provider
      value={{
        setCards,
        loading,
        cards,
        filteredCards,
        filterCardsHandler,
        resetFilteredCards,
      }}
    >
      {children}
    </CardWrapper.Provider>
  );
};

const CardState = () => useContext(CardWrapper);

export { CardContext, CardState };
