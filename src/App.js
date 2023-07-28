import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import "./App.css"
import Home from './components/Home';
import SignUp from './components/SignUp';
import WineLink from './components/Wine-Link';
import CategorySearch from './components/Category-Search';
import BeerLink from './components/BeerLink';
import AperitifsLink from './components/AperitifsLink';
import SpiritsLink from './components/SpiritsLink';
import BittersMixersLink from './components/img/BittersMixersLink';
import ReadyDrinkLink from './components/img/ReadyDrinkLink';
import ShopLinkNavbar from './components/ShopLinkNavbar';
import ShopbyOccasion from './components/ShopbyOccasion';
import CartLink from './components/CartLink'

function App() {
  return (
    <> 
    <SpiritsLink/>
    <BeerLink/>
    <WineLink/>
    <ShopbyOccasion/>
    <ShopLinkNavbar/>
    <CartLink/>
   <BrowserRouter>
   <Routes>
<Route path='/' element={<LoginForm/>}/>

<Route path='/home' element={<Home/>} />
<Route path='/signup' element={<SignUp/>} />
<Route path='/CategorySearch' element={<CategorySearch/>}/>
<Route path='/Wine' element={<WineLink/>}/>
<Route path='/Beer' element={<BeerLink/>}/>
<Route path='/Aperitifs' element={<AperitifsLink/>}/>
<Route path='/Spirits' element={<SpiritsLink/>}/>
<Route path='/BittersMixers' element={<BittersMixersLink/>}/>
<Route path='/ReadyDrink' element={<ReadyDrinkLink/>}/>
</Routes>
</BrowserRouter>
   



    </>
  );
}

export default App;
