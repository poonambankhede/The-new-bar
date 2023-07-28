import Header from "./Header";
import ShopbyDrink from "./Shop-by-Drink";
import SalebrationDrinks from "./Salebration_Drinks";
import ThinkLessDrinkMore from "./ThinkLessDrinkMore";
import Occasion from "./Occasion";
import DiscoverNewDrink from "./DiscoverNewDrink";
import OurProcess from "./OurProcess";
import Footer from "./Footer";
// import CategorySearch from "./Category-Search";



function Home() {
  return (
    <>
    {/* <CategorySearch/> */}
   <Header/>
   <ShopbyDrink/>
   <SalebrationDrinks/>
   <ThinkLessDrinkMore/>
<Occasion/>
<DiscoverNewDrink/>
<OurProcess/>

   <Footer/>
    </>
  )
}

export default Home;