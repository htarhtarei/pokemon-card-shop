import downArrow from "../../assets/downarrow.svg"

const Filters = () => {
  return (
    <div className="flex justify-center">
      <form className="md:w-[383px] flex justify-between ps-5 pe-1  text-[#BCBBBB] bg-white outline-none border-none rounded-full">
        <input
          type="text"
          className="bg-transparent py-1 text-[14px] w-[400px] border-e-2"
          placeholder="Name.."
        />

        <span className="flex text-[11px] px-2 border-e-2">
          <input type="text" className="outline-none" name="" id="" placeholder="Type" />
          <img src={downArrow} alt="downArrow" />
        </span>
        <span className="flex text-[11px] px-2 border-e-2">
          <input type="text" className="outline-none" name="" id="" placeholder="Rarity" />
          <img src={downArrow} alt="downArrow" />
        </span>
        <span className="flex text-[11px] px-2">
          <input type="text" className="outline-none" name="" id="" placeholder="Set" />
          <img src={downArrow} alt="downArrow" />
        </span>
      </form>
    </div>
  );
}

export default Filters
