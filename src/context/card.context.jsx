import { useContext, useState, createContext } from "react";

const CardWrapper = createContext();

const CardContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [displayFilter, setDisplayFilter] = useState(false);

  return (
    <CardWrapper.Provider
      value={{
        setCards,
        loading,
        cards,
        filteredCards,
        displayFilter,
        setDisplayFilter,
      }}
    >
      {children}
    </CardWrapper.Provider>
  );
};

const CardState = () => useContext(CardWrapper);

export { CardContext, CardState };
