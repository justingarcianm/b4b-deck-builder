import { useState } from "react";

import { FiTarget } from "react-icons/fi";
import { FaWeightHanging, FaDice } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io";

const Card = ({ card }) => {
  const [active, setActive] = useState(false);

  const setAffinity = (affinity) => {};

  const setCardColor = (affinity) => {};

  return (
    <article
      className={`w-1/5 border-4 rounded-sm ${
        active ? "border-red-500" : "border-blue-400"
      } p-4 bg-blue-400 cursor-pointer shadow-sm`}
      onClick={() => setActive(!active)}
    >
      <div className="">
        <div className="flex justify-between align-middle gap-4">
          <div className="">
            <h3 className="uppercase font-semibold text-xl">{card.name}</h3>
            <h4 className="font-light">{card.cardType}</h4>
          </div>
          <span>{card.cardAffinity}</span>
        </div>
        <div className="mt-2">
          <p className="pointer-events-none">{card.desc}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
