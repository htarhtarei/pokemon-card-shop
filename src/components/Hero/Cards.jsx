import Card from "./Card"
import search from "../../assets/search.svg"
import { useState } from "react";

const Cards = ({ datas }) => {
  const [seeMoreCard,setSeeMoreCard] = useState(6)
  const cards = datas.slice(0, seeMoreCard);

  return (
    <div className="pt-10 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 min-h-[100vh] overflow-hidden">
        {cards.map((card, index) => (
          <Card data={card} key={index} />
        ))}
      </div>

      <div onClick={()=>setSeeMoreCard(seeMoreCard + 3)} className="flex justify-center pb-12 text-zinc-500">
        <img src={search} alt="searchIcon" />
        <span className="ps-1">show more</span>
      </div>

      <div className="fixed bottom-0 left-0 w-screen h-[100px] z-40 fade"></div>
    </div>
  );
};

export default Cards

// bg-[#F8F8F8]/100
