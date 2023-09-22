import './DroneFilmHeader.css';
import Navigation from '../home/Nav';

export default function DroneFilmHeader(){
    return(
        <>
        <div className='Header-container pt-1'>
       <div className="footage-image-background">
        {/* eslint-disable-next-line */}
        <img src="https://i.ibb.co/94CXnjB/plants.jpg" alt="plants" border="0" />
         </div>
         <Navigation />
          </div>
        </>
    )
}