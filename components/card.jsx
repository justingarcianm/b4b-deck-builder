import { FiTarget } from "react-icons/fi";
import { FaWeightHanging, FaDice } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io";

const Card = ({ card }) => {
  return (
    <article className="w-1/5 border-gray-100 border">
      <div className="flex justify-between align-middle">
        <div className="flex flex-col align-top justify-start">
          <h3>{card.name}</h3>
          <h4>{card.cardType}</h4>
        </div>
      </div>
    </article>
  );
};

export default Card;
