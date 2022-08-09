import { FiTarget } from "react-icons/fi";
import { FaWeightHanging, FaDice } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io";

const Card = ({ card }) => {
  const displayAffinity = (affinity) => {
    if (affinity === "REFLEX") return <IoSpeedometerOutline />;
    else if (affinity === "DISCIPLINE") return <FiTarget />;
    else if (affinity === "BRAWN") return <FaWeightHanging />;
    else if (affinity === "FORTUNE") return <FaDice />;
    else return "";
  };

  return (
    <article className="w-1/5">
      <div className="flex justify-between align-middle">
        <div className="flex flex-col align-top justify-start">
          <h3>{card.name}</h3>
          <h4>{card.cardType}</h4>
        </div>
        {displayAffinity(card.cardAffinity)}
      </div>
    </article>
  );
};

export default Card;
