import { useDispatch, useSelector } from "react-redux";
import { getIsPay } from "../../store/cardSlice";
import CartItem from "./CartItem";

const CartList = () => {
  const dispatch = useDispatch()
  const { selectedCard:cards } = useSelector((state) => state.card);

  return (
    <div>
      {cards.length === 0 ? (
        <div className="flex flex-col justify-center items-center text-red-600 font-semibold h-40">
          <h1 className=" text-lg">There is no cart yet!!</h1>
          <h1 className=" text-lg">Please enjoy your shopping🥰</h1>
        </div>
      ) : (
        <div className="no-scrollbar">
          <ul className="max-h-[340px] overflow-y-scroll no-scrollbar select-none">
              {cards.map((card, index) => <CartItem key={index} card={card } />)}
          </ul>

          <p className="text-zinc-400 underline text-[12px] text-center">
            clear all
          </p>

          <div className="pt-6 px-12">
            <div className="flex justify-between">
              <h1 className=" font-semibold">Total cards</h1>
              <p className="text-red-600">1</p>
            </div>
            <div className="text-[20px] font-bold pt-1 flex justify-between mb-5">
              <h1 className="">Total price</h1>
              <p className="text-red-600">$19.67</p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  dispatch(getIsPay(true));
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
