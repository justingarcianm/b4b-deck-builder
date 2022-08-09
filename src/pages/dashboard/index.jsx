import { useEffect, useState } from "react";
import apiHandler from "../../utils/apiHandler";

import Card from "../../../components/card";

import { FaSlidersH, FaSearch } from "react-icons/fa";

const Dashboard = ({ data }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, [data]);

  return (
    <div className="flex">
      <aside className="w-1/4">DECK</aside>
      <div className="w-3/4">
        <div className="flex justify-end align-middle">
          <div className="flex align-middle">
            <FaSlidersH /> FILTER
          </div>
          <div>
            <form className="flex align-middle justify-start">
              <button type="submit">
                <FaSearch />
              </button>
              <input type="text" placeholder="SEARCH" />
            </form>
          </div>
        </div>
        <div className="flex w-full">
          {cards.length > 0 &&
            cards.map((card) => {
              return <Card key={card.id} card={card} />;
            })}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const data = await apiHandler("cards");

  return { props: { data } };
}

export default Dashboard;
