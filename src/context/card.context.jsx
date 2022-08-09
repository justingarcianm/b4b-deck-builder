import { useContext, useState, createContext } from "react";

const CardWrapper = createContext();

const CardContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const loadCards = (data) => {
    setLoading(true);
    setCards(data);
    return setLoading(false);
  };

  return (
    <CardWrapper.Provider value={{ setCards, loading, cards }}>
      {children}
    </CardWrapper.Provider>
  );
};

const CardState = () => useContext(CardWrapper);

export { CardContext, CardState };
