import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectCards } from "../../store/cardSlice";

const Card = ({ data }) => {
  const [isSelect, setIsSelect] = useState(false);
  const [leftCard, setLeftCard] = useState(20);
  const dispatch = useDispatch();

  //to get all cards from cart slice redux
  const { cards,selectedCard,isPay } = useSelector((state) => state.card);
  console.log(selectedCard);

  //to change btn bg and text ,then add selected card to selected card in card slice
  const clickHandler = (id) => {
    setIsSelect(true);
    setLeftCard(leftCard - 1);

    let leftBothCard = leftCard === 20 ? leftCard - 1 : leftCard;

    //to add card to seletedcards in cardslice file
    const seletedCard = cards.find((card) => card.id === id);
    dispatch(getSelectCards({ ...seletedCard, left: leftBothCard }));
    
  };


  return (
    <div className="flex flex-col items-center relative min-h-[430px] mb-12">
      <img
        src={data.images.small}
        alt="cardImage"
        className="w-[194px] h-[271px] z-10"
      />
      <div className="bg-white text-center px-16 pt-20 rounded-2xl w-[294px] h-[200px] z-0 absolute top-52 shadow-md">
        <h1
          className={`${
            data.name.length > 15
              ? "text-[20px] leading-5 no-scrollbar"
              : "text-[25px]"
          } font-bold `}
        >
          {data.name.length > 15 ? data.name.slice(0, 15) : data.name}
        </h1>
        <p className=" text-[#0F6DB0] text-[.9rem]">{data.rarity}</p>
        <div className="flex justify-between">
          <p className="text-lg text-zinc-500">
            ${data.cardmarket.prices.trendPrice}
          </p>
          <p className="text-lg text-zinc-500">{leftCard} left</p>
        </div>
      </div>
        <button
          onClick={() => clickHandler(data.id)}
          className={`${
            isSelect ? "bg-[#1D1C1C] text-white" : "bg-[#FDCE29]"
          } py-2 px-12 font-semibold rounded-full z-10 absolute bottom-0`}
        >
          {isSelect ? "Selected" : "Select card"}
        </button>
    </div>
  );
};

export default Card;
