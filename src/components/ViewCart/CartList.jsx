import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletedCard, getIsPay, getIsShow, getTotalCarts, getTotalPrices } from "../../store/cardSlice";

import CartItem from "./CartItem";
import CartEmptyMsg from "./CartEmptyMsg"


const CartList = () => {
  const dispatch = useDispatch()
  const { selectedCard: cards } = useSelector((state) => state.card);
  const { totalCarts: totalQty } = useSelector(state => state.card)
  const {total} = useSelector(state=>state.card)
  
  useEffect(() => {
    if (cards.length > 0) {
      dispatch(getTotalCarts());
      dispatch(getTotalPrices())
   }
  }, [cards])

    return (
      <div>
        {cards.length === 0 ? (
          <CartEmptyMsg/>
        ) : (
          <div className="no-scrollbar">
            <ul className="max-h-[340px] overflow-y-scroll no-scrollbar select-none">
              {cards.map((card, index) => (
                <CartItem key={index} card={card} />
              ))}
            </ul>

            <p
              onClick={() => {
                dispatch(deletedCard(), dispatch(getIsShow(false)));
              }}
              className="text-zinc-400 underline text-[12px] text-center"
            >
              clear all
            </p>

            <div className="pt-6 px-12">
              <div className="flex justify-between">
                <h1 className=" font-semibold">Total cards</h1>
                <p className="text-red-600">{totalQty}</p>
              </div>
              <div className="text-[20px] font-bold pt-1 flex justify-between mb-5">
                <h1 className="">Total price</h1>
                <p className="text-red-600">${total.toFixed(2)}</p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    dispatch(getIsPay(true));
                    dispatch(deletedCard());
                  }}
                  className="bg-[#298BFD] text-[18px] text-white py-2 w-[271px] rounded-full"
                >
                  Pay now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default CartList;
