//components
import CartContainer from "../ViewCart/CartContainer";
import Cards from "./Cards";
import Filters from "./Filters";

const Hero = ({ cards }) => {
  return (
    <div className="px-4 sm:px-12 pt-12 md:px-32 lg:px-48">
      <Filters />
      <Cards datas={cards} />
      <CartContainer />
    </div>
  );
};

export default Hero;
