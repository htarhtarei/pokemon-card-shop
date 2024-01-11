import Card from "./Card"
import search from "../../assets/search.svg"

const Cards = ({ datas }) => {
  const cards = datas.slice(0, 6);
  
  return (
    <div className="pt-10 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[100vh] overflow-hidden">
        {cards.map((card, index) => <Card data={card} key={ index} />)}
      </div>

      <div className="flex justify-center pb-12 text-zinc-500">
        <img src={search} alt="searchIcon" />
        <span className="ps-1">show more</span>
      </div>

      {/* <div className="fixed bottom-0 left-0 w-screen h-[100px] z-40 fade-in"></div> */}
    </div>
  );
}

export default Cards

// bg-[#F8F8F8]/100
