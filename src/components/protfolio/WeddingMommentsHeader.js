import './WeddingMommentsHeader.css';
import Navigation from '../home/Nav';

export default function WeddingMommentsHeader(){
    return(
        <>
        <div className='Header-container pt-1'>
       <div className="wedding-image-background">
       
        {/* eslint-disable-next-line */}
        <img src="https://i.ibb.co/ZfVTkP4/arial-viw.jpg" alt="arial-view" border="0" />
         </div>
         <Navigation />
          </div>
        </>
    )
}