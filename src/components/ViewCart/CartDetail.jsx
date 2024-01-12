import { useDispatch, useSelector } from "react-redux";
import closewhite from "../../assets/closewhite.svg";
import { getIsPay, getIsShow } from "../../store/cardSlice";
import CartPaymentSucess from "./CartPaymentSucess";
import CartList from "./CartList";

const CartDetail = () => {
  const { isPay } = useSelector(state => state.card)
  const dispatch = useDispatch()

  return (
    <div className="max-h-[590px] mb-5 bg-white p-8 w-[416px] rounded-3xl">
      {isPay ? <CartPaymentSucess /> : <CartList />}
      
      <button onClick={() => { dispatch(getIsShow(false)); dispatch(getIsPay(false))}} className="bg-red-600 p-3 rounded-lg absolute bottom-0 left-52">
        <img src={closewhite} alt="closeIcon" />
      </button>
    </div>
  );
};

export default CartDetail;
