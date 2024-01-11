import check from "../../assets/check.svg"

const CartPaymentSucess = () => {
  return (
    <div className="">
      <div className=" h-[282px] flex flex-col justify-center items-center">
        <img src={check} alt="checkIcon" />
        <p className="text-[20px] font-semibold pt-4">Payment success!</p>
      </div>
    </div>
  );
}

export default CartPaymentSucess
