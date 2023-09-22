import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Demo from "./components/home/Demo";
import HomeB from "./components/home/HomeB";
import AboutUs from "./components/home/about/AboutUs";
import OurTeamPage from "./components/home/about/OurTeamPage";
import Pricing from "./components/home/about/Pricing";
import FaqPage from './components/home/about/FaqPage';
import Testimonials from './components/home/about/Testimonials';
import Gallery from './components/home/about/Gallery';
import ProtfolioPage from './components/protfolio/ProtfolioPage';
import TravelFootage from './components/protfolio/TravelFootage';
import WeddingMomments from './components/protfolio/WeddingMomments';
import ArialCar from './components/protfolio/AerialCar';
import DroneFilm from './components/protfolio/DroneFilm';
import ContactUs from './components/contactUs/ContactUs';
import Location from './components/contactUs/Location';
import Shop from './components/shop/Shop';
import ShopDetailOne from './components/shop/ShopDetailOne';
import ShopDetailTwo from './components/shop/ShopDetailTwo';
import ShopDetailThree from './components/shop/ShopDetailThree';
import ShopDetailFour from './components/shop/ShopDetailFour';
import ShopDetailFive from './components/shop/ShopDetailFive';
import ShopDetailSix from './components/shop/ShopDetailSix';
import ShopDetailSeven from './components/shop/ShopDetailSeven';
import ShopDetailEight from './components/shop/ShopDetailEight';
import './global.css';

function App() {
  return (
    <div>
      <Routes>
      <Route path ="/" element= {<Demo/>}/>
      <Route path ="/HomeB" element= {<HomeB/>}/>
      <Route path ="/AboutUs" element= {<AboutUs/>}/>
      <Route path ="/OurTeamPage" element= {<OurTeamPage/>}/>
      <Route path ="/Pricing" element= {<Pricing/>}/>
      <Route path ="/FaqPage" element= {<FaqPage/>}/>
      <Route path ="/Testimonials" element= {<Testimonials/>}/>
      <Route path ="/Gallery" element= {<Gallery/>}/>
      <Route path ="/ProtfolioPage" element= {<ProtfolioPage/>}/>
      <Route path ="/TravelFootage" element= {<TravelFootage/>}/>
      <Route path ="/WeddingMomments" element= {<WeddingMomments/>}/>
      <Route path ="/ArialCar" element= {<ArialCar/>}/>
      <Route path ="/DroneFilm" element= {<DroneFilm/>}/>
      <Route path ="/ContactUs" element= {<ContactUs/>}/>
      <Route path ="/Location" element= {<Location/>}/>
      <Route path ="/Shop" element= {<Shop/>}/>
      <Route path ="/ShopDetailOne" element= {<ShopDetailOne/>}/>
      <Route path ="/ShopDetailTwo" element= {<ShopDetailTwo/>}/>
      <Route path ="/ShopDetailThree" element= {<ShopDetailThree/>}/>
      <Route path ="/ShopDetailFour" element= {<ShopDetailFour/>}/>
      <Route path ="/ShopDetailFive" element= {<ShopDetailFive/>}/>
      <Route path ="/ShopDetailSix" element= {<ShopDetailSix/>}/>
      <Route path ="/ShopDetailSeven" element= {<ShopDetailSeven/>}/>
      <Route path ="/ShopDetailEight" element= {<ShopDetailEight/>}/>
    </Routes>
    </div>
  );
}
export default App;
