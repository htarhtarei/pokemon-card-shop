import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCards } from "../../store/cardSlice";

//components
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import Loader from "../../utils/Loader/Loader"

const Home = () => {
  const [cards, setCards] = useState([]);
  const dispatch = useDispatch();

  //to get cards from api
  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v2/cards")
      .then((res) => setCards(res.data.data))
      .catch((err) => console.log(err.message));

    //to store all card in store
    if (cards.length !== 0) {
      dispatch(getCards(cards));
    }
  }, [cards]);

  return (
    <div>
      {cards.length === 0 ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Hero cards={cards} />
        </div>
      )}
    </div>
  );
}

export default Home
