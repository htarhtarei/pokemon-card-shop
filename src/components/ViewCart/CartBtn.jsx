import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cart from '../../assets/cart.svg'
import { getIsShow } from '../../store/cardSlice';

const CartBtn = () => {
  const { selectedCard:cards } = useSelector(state => state.card)
  const [isShow, setIsShow] = useState(false)
  const dispatch = useDispatch()


  return (
    <div onClick={() => { setIsShow(true); dispatch(getIsShow(true))}} className="flex justify-center">
      <div className="flex items-center p-3 font-medium text-center relative">
        <div className="flex text-[.9rem] opacity-100 bg-blue-500 rounded-lg text-white p-3">
          <img src={cart} alt="cart" />
          <span className="ps-2">View cart</span>
        </div>
        <div
          className={`absolute top-1 left-1 inline-flex items-center justify-center ${cards.length !==0 ? "w-5 h-5 md:w-6 md:h-6":""} md:text-xs text-[.7rem] font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900`}
        >
          {cards.length !== 0 ? cards.length : ""}
        </div>
      </div>
    </div>
  );
}

export default CartBtn
