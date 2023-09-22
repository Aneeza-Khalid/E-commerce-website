import './ArialCarHeader.css';
import Navigation from '../home/Nav';

export default function ArialCarHeader(){
    return(
        <>
        <div className='Header-container pt-1'>
       <div className="footage-image-background">
        {/* eslint-disable-next-line */}
        <img src="https://i.ibb.co/hHn7gnX/6454c3f7a687a33d64af28f7-car-image-p-800.jpg" alt="6454c3f7a687a33d64af28f7-car-image-p-800" border="0"></img>
         </div>
         <Navigation />
          </div>
        </>
    )
}