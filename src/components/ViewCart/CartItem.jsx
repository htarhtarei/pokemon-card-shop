import uparrow from "../../assets/uparrow.svg";
import downarrow from "../../assets/downarrowBlue.svg";
import { useSelector } from "react-redux";

const CartItem = ({ card }) => {
  const { leftCard } = useSelector(state => state.card)
  console.log(leftCard);

  console.log(card);
  return (
    <li className="flex justify-between pb-6">
      <div className="flex">
        <img src={card.images.small} alt="image" className="w-[77px] h-[108px]" />
        <div className="ps-5 pt-1">
          <h1 className="text-lg font-extrabold">{card.name }</h1>
          <p className="text-[12px] pb-4">
            ${card.cardmarket.prices.trendPrice} <span className=" text-zinc-500">per card</span>
          </p>
          <p className="flex text-[14px]">
            <span className=" text-red-600">{leftCard }</span>
            <span className="text-zinc-400 ps-1">cards left</span>
          </p>
        </div>
      </div>

      <div className="pt-2">
        <div className="flex text-[#298BFD]">
          <span className="pe-1 font-semibold pb-4">2</span>
          <div>
            <img src={uparrow} alt="uparrowIcon" className="pb-1" />
            <img src={downarrow} alt="downarrowIcon" />
          </div>
        </div>
        <p className="text-[12px] font-semibold">price</p>
        <p className="font-semibold text-[#298BFD]">$99</p>
      </div>
    </li>
  );
};

export default CartItem;
