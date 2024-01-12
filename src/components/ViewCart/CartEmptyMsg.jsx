import emptyCart from "../../assets/cartE.png";

const CartEmptyMsg = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[282px] text-stone-600 font-semibold h-40">
      <img src={emptyCart} alt="emptyCart" className="w-[190px] h-[190px]" />
      <h1 className=" text-red-500 text-[20px] font-semibold">There is no cart yet!!</h1>
    </div>
  );
}

export default CartEmptyMsg
