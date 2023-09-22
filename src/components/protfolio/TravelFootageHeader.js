import './TravelFootageHeader.css';
import Navigation from '../home/Nav';

export default function TravelFootageHeader(){
    return(
        <>
        <div className='Header-container pt-1'>
       <div className="footage-image-background">
        <div className='middle-footage-image'>
       
        {/* eslint-disable-next-line */}
        <img src="https://i.ibb.co/MGvdQXd/photo.webp" alt="camera-man-photo" border="0" />
         </div>
         </div>
         <Navigation />
          </div>
        </>
    )
}