import uparrow from "../../assets/uparrow.svg";
import downarrow from "../../assets/downarrowBlue.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  increAndDecre,
  getTotalCarts,
  getTotalPrices,
} from "../../store/cardSlice";

const CartItem = ({ card }) => {
  // console.log(card);
  const [cardQty, setCardQty] = useState(card.qty)
  const dispatch = useDispatch()
  const price = card.cardmarket.prices.trendPrice * cardQty;

  const increHandler = (id, type) => {
    if (cardQty < 20) {
      setCardQty(cardQty + 1)
      dispatch(increAndDecre({ id, type }))
      dispatch(getTotalCarts());
      dispatch(getTotalPrices())
    }
    else {
     setCardQty(20);
   }
  }

  const decreHandler = (id, type) => {
    if (cardQty > 1) {
      setCardQty(cardQty - 1);
      dispatch(increAndDecre({ id, type }))
      dispatch(getTotalCarts());
      dispatch(getTotalPrices());
    }
    else {
      setCardQty(1);
    }

  }
  
  return (
    <li className="flex justify-between pb-6">
      <div className="flex">
        <img
          src={card.images.small}
          alt="image"
          className="w-[77px] h-[108px]"
        />
        <div className="ps-5 pt-1">
          <h1 className="text-lg font-extrabold">{card.name}</h1>
          <p className="text-[12px] pb-4">
            ${card.cardmarket.prices.trendPrice}
            <span className=" text-zinc-500">per card</span>
          </p>
          <p className="flex text-[14px]">
            <span className=" text-red-600">{card.left}</span>
            <span className="text-zinc-400 ps-1">cards left</span>
          </p>
        </div>
      </div>

      <div className="pt-2">
        <div className="flex justify-end text-[#298BFD]">
          <span className="pe-1 font-semibold pb-4">{cardQty}</span>
          <div>
            <img
              onClick={() => increHandler(card.id, "increase")}
              src={uparrow}
              alt="uparrowIcon"
              className="pb-1"
            />
            <img
              onClick={() => decreHandler(card.id, "decrease")}
              src={downarrow}
              alt="downarrowIcon"
            />
          </div>
        </div>
        <p className="text-[12px] font-semibold text-end">price</p>
        <p className="font-semibold text-[#298BFD]">${ price.toFixed(2) }</p>
      </div>
    </li>
  );
};

export default CartItem;
