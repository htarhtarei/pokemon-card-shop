import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getCards } from "../../store/cardSlice"

//components
import Loader from "../../utils/Loader/Loader"
import CartContainer from "../ViewCart/CartContainer"
import Cards from "./Cards"
import Filters from "./Filters"

const Hero = () => {
  const [cards, setCards] = useState([])
  const dispatch = useDispatch()

  //to get cards from api
  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v2/cards")
      .then(res => setCards(res.data.data))
      .catch(err => console.log(err.message))
    
    //to store all card in store
    if (cards.length !== 0) {
      dispatch(getCards(cards))
    }
 },[cards])

  return (
    <>
      {cards.length === 0 ? (
        <Loader />
      ) : (
        <div className="px-4 sm:px-12 pt-12 md:px-32 lg:px-48">
          <Filters />
          <Cards datas={cards} />
          <CartContainer />
        </div>
      )}
    </>
  );
}

export default Hero
