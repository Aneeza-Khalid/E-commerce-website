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
    </Routes>
    </div>
  );
}
export default App;
