import { useSelector } from "react-redux";
import CartBtn from "./CartBtn";
import CartDetail from "./CartDetail";

const CartContainer = () => {
  const { isShow } = useSelector(state => state.card)

  return (
    <div className="flex justify-center ">
      <div className="fixed bottom-8 mt-12 z-40 ">
        {isShow ? <CartDetail /> :<CartBtn/>}
        </div>
    </div>
  );
};

export default CartContainer;
