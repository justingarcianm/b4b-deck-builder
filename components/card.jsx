import { useState } from "react";

import { FiTarget } from "react-icons/fi";
import { FaWeightHanging, FaDice } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";

const Card = ({ card, index }) => {
  const [active, setActive] = useState(false);

  const displayAffinity = (affinity) => {
    if (affinity === "REFLEX")
      return <IoSpeedometerOutline className="text-blue-500 text-5xl" />;
    else if (affinity === "DISCIPLINE")
      return <FiTarget className="text-red-500 text-5xl" />;
    else if (affinity === "BRAWN")
      return <FaWeightHanging className="text-green-500 text-5xl" />;
    else if (affinity === "FORTUNE")
      return <FaDice className="text-red-500 text-5xl" />;
    else return "";
  };

  return (
    <article
      className={`w-full border-4 rounded-md ${
        active ? "border-red-500" : "border-gray-900"
      } p-4 bg-gray-900 cursor-pointer shadow-sm`}
      onClick={() => setActive(!active)}
      data-card={index}
    >
      <div className="flex flex-col justify-between">
        <div className="flex justify-between items-center gap-4">
          <div className="">
            <h3 className="uppercase font-semibold text-xl">{card.name}</h3>
            <h4 className="font-light">{card.cardType}</h4>
          </div>
          <span>{displayAffinity(card.cardAffinity)}</span>
        </div>
        <div className="mt-2">
          <p className="pointer-events-none tracking-wide	leading-loose text-sm">
            {card.desc}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
